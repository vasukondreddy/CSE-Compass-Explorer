
import React from "react";
import { BookOpen, Code, TrendingUp, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: BookOpen,
      title: "Choose Your Path",
      description: "Select from comprehensive courses in DSA, DBMS, OS, Computer Networks, and more.",
      color: "text-blue-600"
    },
    {
      icon: Code,
      title: "Practice & Learn",
      description: "Follow structured roadmaps with hands-on coding exercises and real-world projects.",
      color: "text-green-600"
    },
    {
      icon: TrendingUp,
      title: "Track Progress",
      description: "Monitor your learning journey with detailed progress tracking and daily streaks.",
      color: "text-purple-600"
    },
    {
      icon: Trophy,
      title: "Master Skills",
      description: "Build expertise through certifications and prepare for technical interviews.",
      color: "text-orange-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How CSE Compass Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A simple 4-step process to accelerate your Computer Science learning journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mb-4">
                  <step.icon className={`h-12 w-12 mx-auto ${step.color}`} />
                </div>
                <div className="absolute -top-4 left-4 bg-gray-900 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
