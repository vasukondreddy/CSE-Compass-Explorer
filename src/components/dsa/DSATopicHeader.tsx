
import React from "react";
import { Badge } from "@/components/ui/badge";
import { DSATopic } from "@/services/dsaService";

interface DSATopicHeaderProps {
  topic: DSATopic;
}

const DSATopicHeader: React.FC<DSATopicHeaderProps> = ({ topic }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="mb-8">
      <div className="flex items-center space-x-4 mb-4">
        <h1 className="text-3xl font-bold text-gray-900">{topic.title}</h1>
        <Badge className={getDifficultyColor(topic.difficulty)}>
          {topic.difficulty}
        </Badge>
      </div>
      <p className="text-lg text-gray-600 mb-6">{topic.description}</p>
    </div>
  );
};

export default DSATopicHeader;
