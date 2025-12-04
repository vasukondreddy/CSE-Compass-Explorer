
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Star, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CourseData } from "@/data/coursesData";

interface CourseHeaderProps {
  course: CourseData;
  courseId: string;
}

const CourseHeader = ({ course, courseId }: CourseHeaderProps) => {
  return (
    <>
      {/* Back Button */}
      <Link to="/courses" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Courses
      </Link>

      {/* Course Header */}
      <div className="mb-8">
        <div className={`h-1 bg-gradient-to-r ${course.color} rounded-full mb-6`} />
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              {course.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">{course.description}</p>
            
            <div className="flex flex-wrap gap-6 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span>{course.rating} rating</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>{course.students} students</span>
              </div>
              <Badge variant="secondary">{course.level}</Badge>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseHeader;
