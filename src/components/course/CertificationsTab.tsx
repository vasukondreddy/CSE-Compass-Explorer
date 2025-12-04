
import { Award, BookOpen, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CourseData } from "@/data/coursesData";

interface CertificationsTabProps {
  course: CourseData;
}

const CertificationsTab = ({ course }: CertificationsTabProps) => {
  // Mock certification data based on the course type
  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      provider: "Amazon Web Services",
      difficulty: "Intermediate",
      duration: "3-4 months prep",
      description: "Validates expertise in designing distributed systems on AWS"
    },
    {
      name: "Google Cloud Professional",
      provider: "Google Cloud",
      difficulty: "Advanced",
      duration: "4-6 months prep",
      description: "Demonstrates ability to design and manage cloud solutions"
    },
    {
      name: "Microsoft Azure Fundamentals",
      provider: "Microsoft",
      difficulty: "Beginner",
      duration: "1-2 months prep",
      description: "Foundational knowledge of cloud services and Azure"
    },
    {
      name: "Certified Data Scientist",
      provider: "IBM",
      difficulty: "Advanced",
      duration: "6-8 months prep",
      description: "Comprehensive data science and machine learning certification"
    }
  ];

  const skillsToMaster = [
    "Cloud Architecture",
    "Data Analysis",
    "Machine Learning",
    "System Design",
    "Security Best Practices",
    "DevOps Practices",
    "API Development",
    "Database Management"
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Industry Certifications</h2>
        <p className="text-gray-600 mb-6">
          Boost your career with these industry-recognized certifications that validate your expertise in {course.title.toLowerCase()}.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                  <p className="text-gray-600 flex items-center mt-1">
                    <BookOpen className="h-4 w-4 mr-1" />
                    by {cert.provider}
                  </p>
                </div>
                <Award className="h-6 w-6 text-yellow-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge 
                    variant="secondary" 
                    className={
                      cert.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                      cert.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }
                  >
                    {cert.difficulty}
                  </Badge>
                  <span className="text-sm text-gray-600 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {cert.duration}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardContent className="p-6">
          <h3 className="font-semibold text-blue-900 mb-3">Essential Skills to Master</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {skillsToMaster.map((skill, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="justify-center text-blue-700 border-blue-300 bg-white hover:bg-blue-50"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CertificationsTab;
