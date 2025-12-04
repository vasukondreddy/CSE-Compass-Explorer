
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { dsaService } from "@/services/dsaService";

interface DSATopic {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  category: string;
  icon: string;
  color: string;
  order_index: number;
  created_at: string;
}

interface DSAQuestion {
  id: string;
  topic_id: string;
  title: string;
  difficulty: string;
}

export const useDSATopics = () => {
  return useQuery({
    queryKey: ['dsa-topics'],
    queryFn: async () => {
      console.log('Fetching DSA topics...');
      
      // Fetch topics
      const { data: topics, error: topicsError } = await supabase
        .from('dsa_topics')
        .select('*')
        .order('order_index', { ascending: true });

      if (topicsError) {
        console.error('Error fetching DSA topics:', topicsError);
        throw topicsError;
      }

      console.log('DSA topics fetched:', topics?.length);

      // Fetch questions count for each topic
      const { data: questions, error: questionsError } = await supabase
        .from('dsa_questions')
        .select('id, topic_id, difficulty');

      if (questionsError) {
        console.error('Error fetching DSA questions:', questionsError);
        throw questionsError;
      }

      console.log('DSA questions fetched:', questions?.length);

      // Group questions by topic and add counts
      const topicsWithCounts = topics?.map(topic => {
        const topicQuestions = questions?.filter(q => q.topic_id === topic.id) || [];
        return {
          ...topic,
          questionCount: topicQuestions.length,
          completedCount: 0, // TODO: Implement user progress tracking
        };
      });

      return topicsWithCounts || [];
    },
  });
};

export const useDSATopicById = (topicId: string) => {
  return useQuery({
    queryKey: ['dsa-topic', topicId],
    queryFn: async () => {
      console.log('Fetching DSA topic:', topicId);
      
      const { data: topic, error: topicError } = await supabase
        .from('dsa_topics')
        .select('*')
        .eq('id', topicId)
        .single();

      if (topicError) {
        console.error('Error fetching DSA topic:', topicError);
        throw topicError;
      }

      // Use dsaService to get questions with proper typing
      const questions = await dsaService.getQuestionsByTopic(topicId);

      console.log('Topic questions fetched:', questions?.length);

      return {
        ...topic,
        difficulty: topic.difficulty as 'Easy' | 'Medium' | 'Hard',
        questions: questions || [],
      };
    },
    enabled: !!topicId,
  });
};
