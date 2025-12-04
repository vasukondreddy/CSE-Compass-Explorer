
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Hash, List, GitBranch, Layers, Network, SortAsc, Zap } from "lucide-react";
import { DSATopic } from "@/services/dsaService";

interface DSATopicCardProps {
  topic: DSATopic;
  progress?: {
    completed: number;
    total: number;
  };
}

const iconMap = {
  'list': List,
  'arrow-right': ArrowRight,
  'layers': Layers,
  'git-branch': GitBranch,
  'network': Network,
  'zap': Zap,
  'sort-asc': SortAsc,
  'hash': Hash,
};

const colorMap = {
  blue: 'from-blue-500 to-blue-600',
  green: 'from-green-500 to-green-600',
  purple: 'from-purple-500 to-purple-600',
  orange: 'from-orange-500 to-orange-600',
  red: 'from-red-500 to-red-600',
  indigo: 'from-indigo-500 to-indigo-600',
  teal: 'from-teal-500 to-teal-600',
  pink: 'from-pink-500 to-pink-600',
};

const DSATopicCard: React.FC<DSATopicCardProps> = ({ topic, progress }) => {
  const IconComponent = iconMap[topic.icon as keyof typeof iconMap] || List;
  const gradientColor = colorMap[topic.color as keyof typeof colorMap] || colorMap.blue;
  const progressPercentage = progress ? (progress.completed / progress.total) * 100 : 0;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Link to={`/dsa/topics/${topic.id}`}>
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105 group cursor-pointer">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${gradientColor} flex items-center justify-center`}>
              <IconComponent className="h-6 w-6 text-white" />
            </div>
            <Badge className={getDifficultyColor(topic.difficulty)}>
              {topic.difficulty}
            </Badge>
          </div>
          <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
            {topic.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600 text-sm leading-relaxed">
            {topic.description}
          </p>
          
          {progress && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Progress</span>
                <span className="font-medium">
                  {progress.completed}/{progress.total} completed
                </span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
            </div>
          )}

          <div className="flex items-center justify-between pt-2">
            <span className="text-sm text-gray-500 capitalize">{topic.category}</span>
            <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default DSATopicCard;
