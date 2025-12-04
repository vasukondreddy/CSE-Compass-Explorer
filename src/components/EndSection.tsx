
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Github, Twitter } from "lucide-react";

const EndSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Start Your Journey?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of students who are already mastering Computer Science with CSE Compass.
          Start your learning journey today and build the skills that matter.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link to="/auth">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link to="/courses">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-blue-50">
              Browse Courses
            </Button>
          </Link>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-lg font-semibold">CSE Compass</p>
              <p className="text-sm opacity-75">Your guide to mastering Computer Science</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="hover:opacity-75 transition-opacity">
                <Mail className="h-6 w-6" />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm opacity-75">
            <p>&copy; 2024 CSE Compass. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndSection;
