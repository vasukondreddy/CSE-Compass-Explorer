
import { Users, TrendingUp, DollarSign, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CourseData } from "@/data/coursesData";

interface CareerTabProps {
  course: CourseData;
}

const CareerTab = ({ course }: CareerTabProps) => {
  // Mock career data based on the course
  const careerPaths = [
    {
      title: "Software Engineer",
      salary: "$70,000 - $150,000",
      growth: "+22%",
      description: "Design and develop software applications and systems"
    },
    {
      title: "Data Scientist",
      salary: "$80,000 - $160,000",
      growth: "+31%",
      description: "Analyze complex data to help organizations make decisions"
    },
    {
      title: "DevOps Engineer",
      salary: "$75,000 - $140,000",
      growth: "+21%",
      description: "Bridge development and operations for efficient software delivery"
    },
    {
      title: "Product Manager",
      salary: "$85,000 - $170,000",
      growth: "+19%",
      description: "Lead product development and strategy initiatives"
    },
    {
      title: "Cloud Architect",
      salary: "$90,000 - $180,000",
      growth: "+25%",
      description: "Design and implement cloud computing strategies"
    },
    {
      title: "Machine Learning Engineer",
      salary: "$95,000 - $190,000",
      growth: "+33%",
      description: "Build and deploy machine learning models and systems"
    }
  ];

  const industries = [
    "Technology & Software",
    "Healthcare & Biotech",
    "Financial Services",
    "E-commerce & Retail",
    "Education & EdTech",
    "Government & Public Sector"
  ];

  const applications = [
    "Web & Mobile Applications",
    "Data Analytics Platforms",
    "AI & Machine Learning Systems",
    "Cloud Infrastructure",
    "Cybersecurity Solutions",
    "IoT & Connected Devices"
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Career Opportunities</h2>
        <p className="text-gray-600 mb-6">
          Explore the diverse career paths available with expertise in {course.title.toLowerCase()}. 
          The tech industry offers excellent growth opportunities and competitive compensation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {careerPaths.map((career, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg text-center">{career.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-3">
              <div className="flex items-center justify-center space-x-2">
                <DollarSign className="h-4 w-4 text-green-600" />
                <span className="text-sm text-green-600 font-medium">{career.salary}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <TrendingUp className="h-4 w-4 text-blue-600" />
                <Badge variant="outline" className="text-blue-600 border-blue-200">
                  {career.growth} growth
                </Badge>
              </div>
              <p className="text-sm text-gray-600">{career.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <CardContent className="p-6">
            <h3 className="font-semibold text-green-900 mb-4 flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Top Industries Hiring
            </h3>
            <div className="space-y-2">
              {industries.map((industry, index) => (
                <div key={index} className="flex items-center text-sm text-green-800">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  {industry}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardContent className="p-6">
            <h3 className="font-semibold text-blue-900 mb-4 flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              Real-world Applications
            </h3>
            <div className="space-y-2">
              {applications.map((application, index) => (
                <div key={index} className="flex items-center text-sm text-blue-800">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  {application}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <CardContent className="p-6">
          <h3 className="font-semibold text-purple-900 mb-3">💡 Career Success Tips</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-purple-800">
            <div>
              <h4 className="font-medium mb-2">Build Your Portfolio:</h4>
              <ul className="space-y-1 list-disc list-inside">
                <li>Create projects that showcase your skills</li>
                <li>Contribute to open source projects</li>
                <li>Document your learning journey</li>
                <li>Build a professional online presence</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Network & Learn:</h4>
              <ul className="space-y-1 list-disc list-inside">
                <li>Join professional communities</li>
                <li>Attend tech meetups and conferences</li>
                <li>Find mentors in your field</li>
                <li>Stay updated with industry trends</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CareerTab;
