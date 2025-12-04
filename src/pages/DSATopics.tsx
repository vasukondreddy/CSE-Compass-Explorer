
import React from "react";
import { Helmet } from "react-helmet-async";
import { BookOpen, Target, Award } from "lucide-react";
import DSATopicGrid from "@/components/dsa/DSATopicGrid";
import { useDSATopics } from "@/hooks/useDSATopics";

const DSATopics = () => {
  const { data: topics, isLoading, error } = useDSATopics();

  console.log('DSATopics page - topics:', topics?.length, 'loading:', isLoading, 'error:', error);

  if (error) {
    console.error('Error in DSATopics:', error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Topics</h2>
          <p className="text-gray-600">Please try refreshing the page.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>DSA Topics - CSE Compass</title>
        <meta name="description" content="Explore comprehensive Data Structures and Algorithms topics with curated problems and solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 py-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full">
                <BookOpen className="h-12 w-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              DSA Topics
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Master Data Structures and Algorithms with our comprehensive collection of topics. 
              Each topic includes carefully curated problems with detailed solutions and explanations.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm">
                <Target className="h-6 w-6 text-blue-600" />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">{topics?.length || 20}</p>
                  <p className="text-sm text-gray-600">Topics</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm">
                <BookOpen className="h-6 w-6 text-green-600" />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">300+</p>
                  <p className="text-sm text-gray-600">Problems</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm">
                <Award className="h-6 w-6 text-purple-600" />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">All Levels</p>
                  <p className="text-sm text-gray-600">Difficulty</p>
                </div>
              </div>
            </div>
          </div>

          {/* Topics Grid */}
          <div className="max-w-7xl mx-auto">
            <DSATopicGrid topics={topics || []} isLoading={isLoading} />
          </div>

          {/* Learning Path Info */}
          {!isLoading && topics && topics.length > 0 && (
            <div className="mt-16 bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                🚀 Your Learning Journey
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl">📚</div>
                  <h3 className="font-semibold text-gray-900">Start with Basics</h3>
                  <p className="text-sm text-gray-600">Begin with Arrays, Strings, and Linked Lists</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl">🧠</div>
                  <h3 className="font-semibold text-gray-900">Build Understanding</h3>
                  <p className="text-sm text-gray-600">Progress through Trees, Graphs, and Algorithms</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl">💪</div>
                  <h3 className="font-semibold text-gray-900">Master Advanced</h3>
                  <p className="text-sm text-gray-600">Tackle Dynamic Programming and Complex Problems</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DSATopics;
