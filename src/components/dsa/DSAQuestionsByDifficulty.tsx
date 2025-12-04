
import React from "react";
import DSAQuestionCard from "@/components/dsa/DSAQuestionCard";
import { DSAQuestion, UserQuestionProgress } from "@/services/dsaService";

interface DSAQuestionsByDifficultyProps {
  questions: DSAQuestion[];
  progress: Map<string, UserQuestionProgress>;
  onProgressUpdate: () => void;
}

const DSAQuestionsByDifficulty: React.FC<DSAQuestionsByDifficultyProps> = ({
  questions,
  progress,
  onProgressUpdate
}) => {
  const easyQuestions = questions.filter(q => q.difficulty === 'Easy');
  const mediumQuestions = questions.filter(q => q.difficulty === 'Medium');
  const hardQuestions = questions.filter(q => q.difficulty === 'Hard');

  const renderQuestionSection = (
    title: string,
    questions: DSAQuestion[],
    colorClass: string
  ) => {
    if (questions.length === 0) return null;

    return (
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <div className={`w-3 h-3 ${colorClass} rounded-full mr-2`}></div>
          {title} ({questions.length})
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {questions.map((question) => (
            <DSAQuestionCard 
              key={question.id} 
              question={question}
              progress={progress.get(question.id)}
              onProgressUpdate={onProgressUpdate}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {renderQuestionSection("Easy Problems", easyQuestions, "bg-green-500")}
      {renderQuestionSection("Medium Problems", mediumQuestions, "bg-yellow-500")}
      {renderQuestionSection("Hard Problems", hardQuestions, "bg-red-500")}
    </div>
  );
};

export default DSAQuestionsByDifficulty;
