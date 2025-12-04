
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CourseData } from "@/data/coursesData";

interface ResourcesTabProps {
  course: CourseData;
}

const ResourcesTab = ({ course }: ResourcesTabProps) => {
  // Mock data for resources since the actual data structure doesn't have detailed resources
  const freeResources = [
    { name: "Official Documentation", platform: "Free", url: "#" },
    { name: "YouTube Tutorials", platform: "Free", url: "#" },
    { name: "GitHub Repositories", platform: "Free", url: "#" },
    { name: "Community Forums", platform: "Free", url: "#" },
  ];

  const paidResources = [
    { name: "Udemy Course", platform: "Udemy", price: "$49.99", url: "#" },
    { name: "Coursera Specialization", platform: "Coursera", price: "$39/month", url: "#" },
    { name: "Pluralsight Path", platform: "Pluralsight", price: "$29/month", url: "#" },
    { name: "LinkedIn Learning", platform: "LinkedIn", price: "$19.99/month", url: "#" },
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Free Resources</h3>
        <div className="space-y-3">
          {freeResources.map((resource, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">{resource.name}</h4>
                    <Badge variant="outline" className="text-xs mt-1 bg-green-50 text-green-700 border-green-200">
                      Free
                    </Badge>
                  </div>
                  <ExternalLink className="h-4 w-4 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Resources</h3>
        <div className="space-y-3">
          {paidResources.map((resource, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">{resource.name}</h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                        {resource.platform}
                      </Badge>
                      <span className="text-sm text-green-600 font-medium">{resource.price}</span>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesTab;
