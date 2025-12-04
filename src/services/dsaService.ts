
import { supabase } from "@/integrations/supabase/client";
import { progressService } from "@/services/progressService";

export interface DSATopic {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  icon: string;
  color: string;
  order_index: number;
  created_at: string;
}

export interface DSAQuestion {
  id: string;
  topic_id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  leetcode_url: string;
  leetcode_number: number;
  company_tags: string[];
  concepts: string[];
  time_complexity: string;
  space_complexity: string;
  hints: string[];
  solution_approach: string;
  created_at: string;
}

export interface UserQuestionProgress {
  id: string;
  user_id: string;
  question_id: string;
  status: 'not_started' | 'attempted' | 'solved' | 'mastered';
  attempts: number;
  time_taken_minutes: number;
  notes: string;
  solved_at: string;
  last_attempted: string;
  created_at: string;
}

export const dsaService = {
  // Get all DSA topics
  async getTopics(): Promise<DSATopic[]> {
    const { data, error } = await supabase
      .from('dsa_topics')
      .select('*')
      .order('order_index');
    
    if (error) throw error;
    return (data || []).map(topic => ({
      ...topic,
      difficulty: topic.difficulty as 'Easy' | 'Medium' | 'Hard'
    }));
  },

  // Get questions for a specific topic
  async getQuestionsByTopic(topicId: string): Promise<DSAQuestion[]> {
    const { data, error } = await supabase
      .from('dsa_questions')
      .select('*')
      .eq('topic_id', topicId)
      .order('difficulty', { ascending: true });
    
    if (error) throw error;
    return (data || []).map(question => ({
      ...question,
      difficulty: question.difficulty as 'Easy' | 'Medium' | 'Hard'
    }));
  },

  // Get user's question progress
  async getUserQuestionProgress(questionId: string): Promise<UserQuestionProgress | null> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;

    const { data, error } = await supabase
      .from('user_question_progress')
      .select('*')
      .eq('user_id', user.id)
      .eq('question_id', questionId)
      .maybeSingle();
    
    if (error) throw error;
    if (!data) return null;
    
    return {
      ...data,
      status: data.status as 'not_started' | 'attempted' | 'solved' | 'mastered'
    };
  },

  // Update user's question progress
  async updateQuestionProgress(
    questionId: string,
    status: 'not_started' | 'attempted' | 'solved' | 'mastered',
    timeTaken?: number,
    notes?: string
  ): Promise<void> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');

    const progressData = {
      user_id: user.id,
      question_id: questionId,
      status,
      attempts: 1,
      time_taken_minutes: timeTaken,
      notes,
      solved_at: status === 'solved' || status === 'mastered' ? new Date().toISOString() : null,
      last_attempted: new Date().toISOString(),
    };

    const { error } = await supabase
      .from('user_question_progress')
      .upsert(progressData, {
        onConflict: 'user_id,question_id',
        ignoreDuplicates: false
      });

    if (error) throw error;

    // Update daily streak if question was solved
    if (status === 'solved' || status === 'mastered') {
      await progressService.updateDSAProgress();
    }
  },

  // Get user's overall DSA stats
  async getUserDSAStats(): Promise<{
    totalSolved: number;
    easySolved: number;
    mediumSolved: number;
    hardSolved: number;
  }> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { totalSolved: 0, easySolved: 0, mediumSolved: 0, hardSolved: 0 };

    const { data, error } = await supabase
      .from('user_question_progress')
      .select(`
        status,
        dsa_questions!inner(difficulty)
      `)
      .eq('user_id', user.id)
      .in('status', ['solved', 'mastered']);

    if (error) throw error;

    const stats = {
      totalSolved: 0,
      easySolved: 0,
      mediumSolved: 0,
      hardSolved: 0,
    };

    data?.forEach((progress: any) => {
      stats.totalSolved++;
      const difficulty = progress.dsa_questions.difficulty;
      if (difficulty === 'Easy') stats.easySolved++;
      else if (difficulty === 'Medium') stats.mediumSolved++;
      else if (difficulty === 'Hard') stats.hardSolved++;
    });

    return stats;
  }
};
