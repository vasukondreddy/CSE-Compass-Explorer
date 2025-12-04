
import { Play, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CourseData } from "@/data/coursesData";

interface ProgressTrackerProps {
  course: CourseData;
  isLearningStarted: boolean;
  completedTopics: string[];
  onStartLearning: () => void;
  onResetProgress: () => void;
}

const ProgressTracker = ({ 
  course, 
  isLearningStarted, 
  completedTopics, 
  onStartLearning, 
  onResetProgress 
}: ProgressTrackerProps) => {
  const totalTopics = course.roadmap.reduce((acc, phase) => acc + phase.topics.length, 0);
  const completedCount = completedTopics.length;
  const progressPercentage = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

  return (
    <Card className="lg:col-span-1">
      <CardHeader>
        <CardTitle>Learning Progress</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {isLearningStarted && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{progressPercentage}%</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
            <div className="text-sm text-gray-600">
              {completedCount} of {totalTopics} topics completed
            </div>
          </div>
        )}
        
        {!isLearningStarted ? (
          <Button 
            onClick={onStartLearning}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            <Play className="h-4 w-4 mr-2" />
            Start Learning Path
          </Button>
        ) : (
          <Button 
            onClick={onResetProgress}
            variant="outline"
            className="w-full"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset Progress
          </Button>
        )}
        
        <div className="text-sm text-gray-600 space-y-2">
          <div>📚 {course.roadmap.length} learning phases</div>
          <div>🎯 {course.careerPaths.length} career paths</div>
          <div>🏆 {course.certifications.length} certifications</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressTracker;
