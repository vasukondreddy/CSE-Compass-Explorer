
import { CheckCircle, Clock, Users, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CourseData } from "@/data/coursesData";

interface RoadmapTabProps {
  course: CourseData;
  isLearningStarted: boolean;
  completedTopics: string[];
  onToggleTopicCompletion: (topic: string) => void;
}

const RoadmapTab = ({ 
  course, 
  isLearningStarted, 
  completedTopics, 
  onToggleTopicCompletion 
}: RoadmapTabProps) => {
  const totalTopics = course.roadmap.reduce((acc, phase) => acc + phase.topics.length, 0);
  const completedCount = completedTopics.length;
  const progressPercentage = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

  return (
    <div className="space-y-8">
      {/* Header with Progress Overview */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold text-gray-900">Learning Roadmap</h2>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <Clock className="h-5 w-5" />
              <span className="font-medium">{course.duration}</span>
            </div>
            <Badge variant="outline" className="bg-white">
              {course.level}
            </Badge>
          </div>
        </div>
        
        {isLearningStarted && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Overall Progress</span>
              <span className="font-semibold text-gray-900">
                {completedCount} / {totalTopics} topics completed
              </span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{progressPercentage}% Complete</span>
              <span>{totalTopics - completedCount} topics remaining</span>
            </div>
          </div>
        )}
      </div>

      {/* Roadmap Phases */}
      <div className="space-y-8">
        {course.roadmap.map((phase, index) => {
          const phaseCompletedTopics = phase.topics.filter(topic => completedTopics.includes(topic));
          const phaseProgress = phase.topics.length > 0 ? Math.round((phaseCompletedTopics.length / phase.topics.length) * 100) : 0;
          
          return (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900">
                        {phase.phase}
                      </CardTitle>
                      <p className="text-gray-600 mt-1">
                        {phase.topics.length} topics • {phase.duration}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-white">
                      {phase.duration}
                    </Badge>
                    {isLearningStarted && (
                      <div className="text-right">
                        <div className="text-sm font-semibold text-gray-900">
                          {phaseProgress}%
                        </div>
                        <div className="text-xs text-gray-500">
                          {phaseCompletedTopics.length}/{phase.topics.length}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {isLearningStarted && (
                  <div className="mt-4">
                    <Progress value={phaseProgress} className="h-2" />
                  </div>
                )}
              </CardHeader>
              
              <CardContent className="pt-6">
                <div className="grid gap-3">
                  {phase.topics.map((topic, topicIndex) => {
                    const isCompleted = completedTopics.includes(topic);
                    return (
                      <div 
                        key={topicIndex} 
                        className={`group flex items-start space-x-3 p-3 rounded-lg border transition-all duration-200 ${
                          isLearningStarted 
                            ? 'cursor-pointer hover:border-blue-300 hover:bg-blue-50' 
                            : 'border-gray-100'
                        } ${
                          isCompleted 
                            ? 'bg-green-50 border-green-200' 
                            : 'bg-white border-gray-200'
                        }`}
                        onClick={() => isLearningStarted && onToggleTopicCompletion(topic)}
                      >
                        <div className="flex-shrink-0 mt-0.5">
                          <CheckCircle 
                            className={`h-5 w-5 transition-colors ${
                              isCompleted 
                                ? 'text-green-500' 
                                : isLearningStarted 
                                  ? 'text-gray-300 group-hover:text-blue-400' 
                                  : 'text-gray-300'
                            }`} 
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm font-medium transition-colors ${
                            isCompleted 
                              ? 'text-green-800 line-through' 
                              : 'text-gray-900 group-hover:text-blue-900'
                          }`}>
                            {topic}
                          </p>
                        </div>
                        {isLearningStarted && !isCompleted && (
                          <ArrowRight className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      {/* Learning Tips Card */}
      {isLearningStarted && (
        <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-500 text-white rounded-full p-2">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">💡 Learning Tips</h3>
                <div className="space-y-2 text-blue-800">
                  <p>• Click on any topic to mark it as completed and track your progress!</p>
                  <p>• Focus on completing one phase at a time for better learning outcomes</p>
                  <p>• Your progress is automatically saved {completedCount > 0 ? 'locally' : ''}</p>
                  <p>• Practice hands-on projects after completing each phase</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Course Stats */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">{course.roadmap.length}</div>
            <div className="text-sm text-gray-600">Learning Phases</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">{totalTopics}</div>
            <div className="text-sm text-gray-600">Total Topics</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-purple-600">{course.students.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Students Enrolled</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RoadmapTab;
