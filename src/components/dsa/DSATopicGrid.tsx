
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Clock, Star } from "lucide-react";

interface DSATopic {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  category: string;
  icon: string;
  color: string;
  order_index: number;
  questionCount?: number;
  completedCount?: number;
}

interface DSATopicGridProps {
  topics: DSATopic[];
  isLoading?: boolean;
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case 'easy':
      return 'bg-green-100 text-green-800';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800';
    case 'hard':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getCategoryColor = (category: string) => {
  const colors = {
    'Basic Data Structures': 'from-blue-500 to-blue-600',
    'Trees': 'from-green-500 to-green-600',
    'Graphs': 'from-purple-500 to-purple-600',
    'Advanced Algorithms': 'from-red-500 to-red-600',
    'Algorithms': 'from-indigo-500 to-indigo-600',
    'Techniques': 'from-teal-500 to-teal-600',
    'Mathematics': 'from-orange-500 to-orange-600',
  };
  return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
};

const DSATopicGrid: React.FC<DSATopicGridProps> = ({ topics, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <Card key={index} className="animate-pulse">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-6 bg-gray-200 rounded w-16"></div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                <div className="h-2 bg-gray-200 rounded w-full"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  const groupedTopics = topics.reduce((acc, topic) => {
    if (!acc[topic.category]) {
      acc[topic.category] = [];
    }
    acc[topic.category].push(topic);
    return acc;
  }, {} as Record<string, DSATopic[]>);

  return (
    <div className="space-y-12">
      {Object.entries(groupedTopics).map(([category, categoryTopics]) => (
        <div key={category} className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{category}</h3>
            <div className={`h-1 w-24 mx-auto bg-gradient-to-r ${getCategoryColor(category)} rounded-full`}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryTopics
              .sort((a, b) => (a.order_index || 0) - (b.order_index || 0))
              .map((topic) => {
                const progress = topic.questionCount ? 
                  Math.round(((topic.completedCount || 0) / topic.questionCount) * 100) : 0;
                
                return (
                  <Link key={topic.id} to={`/dsa/topics/${topic.id}`}>
                    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-blue-200">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                            {topic.title}
                          </CardTitle>
                          <Badge className={getDifficultyColor(topic.difficulty)}>
                            {topic.difficulty}
                          </Badge>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="pt-0">
                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                          {topic.description}
                        </p>
                        
                        <div className="space-y-3">
                          {topic.questionCount && (
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-500">
                                {topic.completedCount || 0} / {topic.questionCount} problems
                              </span>
                              {progress > 0 && (
                                <div className="flex items-center gap-1">
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                  <span className="text-green-600 font-medium">{progress}%</span>
                                </div>
                              )}
                            </div>
                          )}
                          
                          {topic.questionCount && (
                            <Progress value={progress} className="h-2" />
                          )}
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                              <Clock className="h-3 w-3" />
                              <span>15 problems</span>
                            </div>
                            
                            {progress === 100 && (
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                <span className="text-xs text-yellow-600 font-medium">Completed</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DSATopicGrid;
