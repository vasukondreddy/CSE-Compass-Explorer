
import { supabase } from "@/integrations/supabase/client";

export interface UserStreak {
  id: string;
  user_id: string;
  streak_date: string;
  dsa_questions_solved: number;
  dbms_topics_completed: number;
  os_topics_completed: number;
  cn_topics_completed: number;
  created_at: string;
  updated_at: string;
}

export interface UserCourseProgress {
  id: string;
  user_id: string;
  course_id: string;
  status: 'started' | 'in_progress' | 'completed';
  progress_percentage: number;
  started_at: string;
  last_accessed: string;
  completed_at?: string;
}

export const progressService = {
  // Get or create today's streak record
  async getTodayStreak(): Promise<UserStreak | null> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;

    const today = new Date().toISOString().split('T')[0];
    
    // Use upsert to handle duplicate entries gracefully
    const { data, error } = await supabase
      .from('user_streaks')
      .upsert({
        user_id: user.id,
        streak_date: today,
      }, {
        onConflict: 'user_id,streak_date',
        ignoreDuplicates: false
      })
      .select()
      .single();

    if (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Error upserting streak:', error);
      }
      
      // If upsert failed, try to fetch existing record
      const { data: existingData, error: fetchError } = await supabase
        .from('user_streaks')
        .select('*')
        .eq('user_id', user.id)
        .eq('streak_date', today)
        .single();

      if (fetchError && fetchError.code !== 'PGRST116') {
        if (process.env.NODE_ENV === 'development') {
          console.error('Error fetching existing streak:', fetchError);
        }
        return null;
      }

      return existingData || null;
    }

    return data;
  },

  // Update streak with completed topics
  async updateStreak(updates: Partial<Pick<UserStreak, 'dsa_questions_solved' | 'dbms_topics_completed' | 'os_topics_completed' | 'cn_topics_completed'>>): Promise<boolean> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return false;

    const today = new Date().toISOString().split('T')[0];

    const { error } = await supabase
      .from('user_streaks')
      .upsert({
        user_id: user.id,
        streak_date: today,
        ...updates,
        updated_at: new Date().toISOString(),
      }, {
        onConflict: 'user_id,streak_date',
        ignoreDuplicates: false
      });

    if (error) {
      console.error('Error updating streak:', error);
      return false;
    }

    return true;
  },

  // Update DSA question progress and streak
  async updateDSAProgress(): Promise<boolean> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return false;

    const today = new Date().toISOString().split('T')[0];

    // Get today's solved questions count
    const { data: todayQuestions, error: questionsError } = await supabase
      .from('user_question_progress')
      .select('question_id, status')
      .eq('user_id', user.id)
      .gte('solved_at', today)
      .in('status', ['solved', 'mastered']);

    if (questionsError) {
      console.error('Error fetching DSA progress:', questionsError);
      return false;
    }

    const solvedCount = todayQuestions?.length || 0;

    // Update streak with DSA progress
    return await this.updateStreak({
      dsa_questions_solved: solvedCount
    });
  },

  // Get DSA stats for today
  async getTodayDSAStats(): Promise<{ solved: number; attempted: number }> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { solved: 0, attempted: 0 };

    const today = new Date().toISOString().split('T')[0];

    const { data, error } = await supabase
      .from('user_question_progress')
      .select('status')
      .eq('user_id', user.id)
      .gte('last_attempted', today);

    if (error) {
      console.error('Error fetching today\'s DSA stats:', error);
      return { solved: 0, attempted: 0 };
    }

    const solved = data?.filter(p => p.status === 'solved' || p.status === 'mastered').length || 0;
    const attempted = data?.length || 0;

    return { solved, attempted };
  },

  // Get current streak count
  async getCurrentStreak(): Promise<number> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return 0;

    const { data, error } = await supabase.rpc('get_current_streak', {
      user_uuid: user.id
    });

    if (error) {
      console.error('Error getting current streak:', error);
      return 0;
    }

    return data || 0;
  },

  // Get or create course progress
  async getCourseProgress(courseId: string): Promise<UserCourseProgress | null> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;

    const { data, error } = await supabase
      .from('user_course_progress')
      .select('*')
      .eq('user_id', user.id)
      .eq('course_id', courseId)
      .single();

    if (error && error.code !== 'PGRST116') {
      console.error('Error fetching course progress:', error);
      return null;
    }

    if (!data) {
      return null;
    }

    // Type assertion to ensure status is correctly typed
    return {
      ...data,
      status: data.status as 'started' | 'in_progress' | 'completed'
    } as UserCourseProgress;
  },

  // Start a course
  async startCourse(courseId: string): Promise<boolean> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return false;

    const { error } = await supabase
      .from('user_course_progress')
      .upsert({
        user_id: user.id,
        course_id: courseId,
        status: 'started',
        progress_percentage: 0,
        last_accessed: new Date().toISOString(),
      }, {
        onConflict: 'user_id,course_id',
        ignoreDuplicates: false
      });

    if (error) {
      console.error('Error starting course:', error);
      return false;
    }

    return true;
  },

  // Update course progress
  async updateCourseProgress(courseId: string, progressPercentage: number): Promise<boolean> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return false;

    const status = progressPercentage === 100 ? 'completed' : 'in_progress';
    const updates: any = {
      user_id: user.id,
      course_id: courseId,
      status,
      progress_percentage: progressPercentage,
      last_accessed: new Date().toISOString(),
    };

    if (progressPercentage === 100) {
      updates.completed_at = new Date().toISOString();
    }

    const { error } = await supabase
      .from('user_course_progress')
      .upsert(updates, {
        onConflict: 'user_id,course_id',
        ignoreDuplicates: false
      });

    if (error) {
      console.error('Error updating course progress:', error);
      return false;
    }

    return true;
  },

  // Get all user's course progress
  async getAllCourseProgress(): Promise<UserCourseProgress[]> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return [];

    const { data, error } = await supabase
      .from('user_course_progress')
      .select('*')
      .eq('user_id', user.id)
      .order('last_accessed', { ascending: false });

    if (error) {
      console.error('Error fetching all course progress:', error);
      return [];
    }

    if (!data) return [];

    // Type assertion to ensure status is correctly typed for all items
    return data.map(item => ({
      ...item,
      status: item.status as 'started' | 'in_progress' | 'completed'
    })) as UserCourseProgress[];
  },
};
