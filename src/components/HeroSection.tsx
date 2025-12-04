
import React from "react";
import { Link } from "react-router-dom";
import { Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-20 px-4 text-center bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Rocket className="h-16 w-16 mx-auto text-blue-600 animate-bounce" />
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
          Master <span className="text-blue-600">Computer Science</span> with 
          <span className="text-purple-600"> CSE Compass</span>
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Your comprehensive guide to excelling in Computer Science and Engineering. 
          Learn DSA, DBMS, OS, Computer Networks and more with structured roadmaps and hands-on practice.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/courses">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
              Start Learning
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link to="/dsa/topics">
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Practice DSA
            </Button>
          </Link>
        </div>
        <div className="mt-12 text-sm text-gray-500">
          <p>🎯 Structured Learning • 💪 Hands-on Practice • 🏆 Track Progress</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
