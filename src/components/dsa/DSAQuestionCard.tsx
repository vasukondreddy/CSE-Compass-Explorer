
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  CheckCircle, 
  Clock, 
  Target,
  AlertCircle,
  Timer
} from "lucide-react";
import { DSAQuestion, UserQuestionProgress, dsaService } from "@/services/dsaService";
import { useToast } from "@/hooks/use-toast";

interface DSAQuestionCardProps {
  question: DSAQuestion;
  progress?: UserQuestionProgress | null;
  onProgressUpdate?: () => void;
}

const DSAQuestionCard: React.FC<DSAQuestionCardProps> = ({ 
  question, 
  progress,
  onProgressUpdate 
}) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const { toast } = useToast();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800 border-green-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Hard': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'solved': return 'text-green-600';
      case 'mastered': return 'text-purple-600';
      case 'attempted': return 'text-yellow-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'solved': case 'mastered': return CheckCircle;
      case 'attempted': return Clock;
      default: return Target;
    }
  };

  const handleSolved = async () => {
    setIsUpdating(true);
    try {
      await dsaService.updateQuestionProgress(question.id, 'solved');
      toast({
        title: "🎉 Great job!",
        description: "Question marked as solved! Progress updated.",
      });
      onProgressUpdate?.();
    } catch (error) {
      console.error('Failed to save progress:', error);
      toast({
        title: "Failed to save progress",
        description: "Please check your internet connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsUpdating(false);
    }
  };

  const StatusIcon = getStatusIcon(progress?.status || 'not_started');

  return (
    <Card className="h-full hover:shadow-md transition-shadow">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <StatusIcon className={`h-5 w-5 ${getStatusColor(progress?.status || 'not_started')}`} />
              <CardTitle className="text-lg">{question.title}</CardTitle>
              {question.leetcode_number && (
                <Badge variant="outline" className="text-xs">
                  #{question.leetcode_number}
                </Badge>
              )}
            </div>
            <Badge className={getDifficultyColor(question.difficulty)}>
              {question.difficulty}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-gray-600 text-sm leading-relaxed">
          {question.description}
        </p>

        {/* Complexity Info */}
        {(question.time_complexity || question.space_complexity) && (
          <div className="flex space-x-4 text-xs">
            {question.time_complexity && (
              <div className="flex items-center space-x-1">
                <Timer className="h-3 w-3" />
                <span>Time: {question.time_complexity}</span>
              </div>
            )}
            {question.space_complexity && (
              <div className="flex items-center space-x-1">
                <AlertCircle className="h-3 w-3" />
                <span>Space: {question.space_complexity}</span>
              </div>
            )}
          </div>
        )}

        {/* Company Tags */}
        {question.company_tags && question.company_tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {question.company_tags.slice(0, 3).map((company, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {company}
              </Badge>
            ))}
            {question.company_tags.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{question.company_tags.length - 3} more
              </Badge>
            )}
          </div>
        )}

        {/* Progress Info */}
        {progress && (
          <div className="text-xs text-gray-500 space-y-1">
            <div>Status: <span className={getStatusColor(progress.status)}>{progress.status}</span></div>
            <div>Attempts: {progress.attempts}</div>
            {progress.solved_at && (
              <div>Solved: {new Date(progress.solved_at).toLocaleDateString()}</div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-2 pt-2">
          {question.leetcode_url && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={() => window.open(question.leetcode_url, '_blank')}
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              LeetCode
            </Button>
          )}
          
          {progress?.status !== 'solved' && (
            <Button
              variant="default"
              size="sm"
              onClick={handleSolved}
              disabled={isUpdating}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <CheckCircle className="h-4 w-4 mr-1" />
              {isUpdating ? 'Saving...' : 'Solved'}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default DSAQuestionCard;
