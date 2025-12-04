
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, BookOpen, Target, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import DSAQuestionList from "@/components/dsa/DSAQuestionList";
import { useDSATopicById } from "@/hooks/useDSATopics";

const DSATopicDetail = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const { data: topicData, isLoading, error } = useDSATopicById(topicId!);

  console.log('DSATopicDetail - topicId:', topicId, 'data:', topicData, 'loading:', isLoading);

  if (error) {
    console.error('Error in DSATopicDetail:', error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Topic</h2>
          <p className="text-gray-600">Please try refreshing the page.</p>
          <Link to="/dsa/topics" className="mt-4 inline-block">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Topics
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-gray-200 rounded w-1/4"></div>
            <div className="h-12 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="grid gap-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-32 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!topicData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Topic Not Found</h2>
          <p className="text-gray-600">The requested topic could not be found.</p>
          <Link to="/dsa/topics" className="mt-4 inline-block">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Topics
            </Button>
          </Link>
        </div>
      </div>
    );
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

  return (
    <>
      <Helmet>
        <title>{topicData.title} - DSA Topics - CSE Compass</title>
        <meta name="description" content={topicData.description} />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 py-8">
          {/* Navigation */}
          <div className="mb-8">
            <Link to="/dsa/topics">
              <Button variant="outline" className="mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to DSA Topics
              </Button>
            </Link>
          </div>

          {/* Topic Header */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <h1 className="text-4xl font-bold text-gray-900">{topicData.title}</h1>
                  <Badge className={getDifficultyColor(topicData.difficulty)}>
                    {topicData.difficulty}
                  </Badge>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {topicData.description}
                </p>
                
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    <span>Category: {topicData.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    <span>{topicData.questions?.length || 0} Problems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Est. 2-4 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Problems Section */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Practice Problems</h2>
              <Badge variant="secondary" className="text-sm">
                {topicData.questions?.length || 0} problems available
              </Badge>
            </div>
            
            <DSAQuestionList 
              questions={topicData.questions || []} 
              isLoading={isLoading} 
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DSATopicDetail;
