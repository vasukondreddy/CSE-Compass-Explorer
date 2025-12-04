
import React from "react";
import { Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { DSAQuestion, UserQuestionProgress } from "@/services/dsaService";

interface DSATopicProgressProps {
  questions: DSAQuestion[];
  progress: Map<string, UserQuestionProgress>;
}

const DSATopicProgress: React.FC<DSATopicProgressProps> = ({ 
  questions, 
  progress 
}) => {
  const completedQuestions = Array.from(progress.values()).filter(
    p => p.status === 'solved' || p.status === 'mastered'
  ).length;
  const progressPercentage = questions.length > 0 ? (completedQuestions / questions.length) * 100 : 0;

  const getCompletedCountByDifficulty = (difficulty: 'Easy' | 'Medium' | 'Hard') => {
    return Array.from(progress.values()).filter(p => 
      (p.status === 'solved' || p.status === 'mastered') && 
      questions.find(q => q.id === p.question_id)?.difficulty === difficulty
    ).length;
  };

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Target className="h-5 w-5 mr-2" />
          Your Progress
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <span>Questions Completed</span>
            <span className="font-medium">{completedQuestions}/{questions.length}</span>
          </div>
          <Progress value={progressPercentage} className="h-3" />
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-green-600">
                {getCompletedCountByDifficulty('Easy')}
              </div>
              <div className="text-sm text-gray-600">Easy</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-600">
                {getCompletedCountByDifficulty('Medium')}
              </div>
              <div className="text-sm text-gray-600">Medium</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-600">
                {getCompletedCountByDifficulty('Hard')}
              </div>
              <div className="text-sm text-gray-600">Hard</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DSATopicProgress;
