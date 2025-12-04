
import React, { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";
import DSAQuestionCard from "./DSAQuestionCard";
import { dsaService, UserQuestionProgress, DSAQuestion } from "@/services/dsaService";
import { useAuth } from "@/contexts/AuthContext";

interface DSAQuestionListProps {
  questions: DSAQuestion[];
  isLoading?: boolean;
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case 'easy':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'hard':
      return 'bg-red-100 text-red-800 border-red-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const DSAQuestionList: React.FC<DSAQuestionListProps> = ({ questions, isLoading = false }) => {
  const { user } = useAuth();
  const [questionProgress, setQuestionProgress] = useState<Record<string, UserQuestionProgress>>({});
  const [loadingProgress, setLoadingProgress] = useState(false);

  // Load user progress for all questions
  useEffect(() => {
    const loadProgress = async () => {
      if (!user || !questions.length) return;
      
      setLoadingProgress(true);
      try {
        const progressMap: Record<string, UserQuestionProgress> = {};
        for (const question of questions) {
          const progress = await dsaService.getUserQuestionProgress(question.id);
          if (progress) {
            progressMap[question.id] = progress;
          }
        }
        setQuestionProgress(progressMap);
      } catch (error) {
        console.error('Error loading question progress:', error);
      } finally {
        setLoadingProgress(false);
      }
    };

    loadProgress();
  }, [user, questions]);

  const handleProgressUpdate = async () => {
    // Reload progress after update
    if (!user || !questions.length) return;
    
    try {
      const progressMap: Record<string, UserQuestionProgress> = {};
      for (const question of questions) {
        const progress = await dsaService.getUserQuestionProgress(question.id);
        if (progress) {
          progressMap[question.id] = progress;
        }
      }
      setQuestionProgress(progressMap);
    } catch (error) {
      console.error('Error reloading question progress:', error);
    }
  };
  if (isLoading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Card key={index} className="animate-pulse">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="h-6 bg-gray-200 rounded w-2/3"></div>
                <div className="h-6 bg-gray-200 rounded w-16"></div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="flex gap-2">
                  <div className="h-6 bg-gray-200 rounded w-20"></div>
                  <div className="h-6 bg-gray-200 rounded w-20"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (!questions.length) {
    return (
      <div className="text-center py-12">
        <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">No Questions Available</h3>
        <p className="text-gray-500">Questions for this topic will be added soon.</p>
      </div>
    );
  }

  const groupedQuestions = questions.reduce((acc, question) => {
    const difficulty = question.difficulty;
    if (!acc[difficulty]) {
      acc[difficulty] = [];
    }
    acc[difficulty].push(question);
    return acc;
  }, {} as Record<string, DSAQuestion[]>);

  const difficultyOrder = ['Easy', 'Medium', 'Hard'];

  return (
    <div className="space-y-8">
      {difficultyOrder.map(difficulty => {
        const difficultyQuestions = groupedQuestions[difficulty];
        if (!difficultyQuestions?.length) return null;

        return (
          <div key={difficulty} className="space-y-4">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-semibold text-gray-900">{difficulty} Problems</h3>
              <Badge className={getDifficultyColor(difficulty)}>
                {difficultyQuestions.length} problems
              </Badge>
            </div>

            <div className="space-y-4">
              {difficultyQuestions.map((question, index) => (
                <DSAQuestionCard
                  key={question.id}
                  question={question}
                  progress={questionProgress[question.id]}
                  onProgressUpdate={handleProgressUpdate}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DSAQuestionList;
