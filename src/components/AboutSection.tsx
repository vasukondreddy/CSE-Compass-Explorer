
import React from "react";
import { Users, Target, Zap, Award } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: "Focused Learning",
      description: "Curated content specifically designed for Computer Science students and professionals."
    },
    {
      icon: Zap,
      title: "Interactive Experience",
      description: "Hands-on coding practice with immediate feedback and detailed explanations."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join thousands of learners on their journey to master Computer Science concepts."
    },
    {
      icon: Award,
      title: "Industry Relevant",
      description: "Content aligned with industry standards and technical interview requirements."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About CSE Compass
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              CSE Compass is your comprehensive learning platform designed specifically for 
              Computer Science and Engineering students. We provide structured learning paths, 
              hands-on practice, and progress tracking to help you master essential CS concepts.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Whether you're preparing for technical interviews, building foundational knowledge, 
              or advancing your career, CSE Compass provides the tools and resources you need to succeed.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <feature.icon className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose CSE Compass?</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Comprehensive course coverage
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Progress tracking & streaks
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Industry-aligned curriculum
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Interactive learning experience
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
