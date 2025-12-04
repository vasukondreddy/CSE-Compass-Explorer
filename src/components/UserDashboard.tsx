import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Flame, BookOpen, Calendar, Trophy } from "lucide-react";
import { progressService, UserCourseProgress, UserStreak } from "@/services/progressService";
import { coursesData } from "@/data/coursesData";
import { useAuth } from "@/contexts/AuthContext";
import DashboardSkeleton from "./DashboardSkeleton";

const UserDashboard = () => {
  const { user } = useAuth();
  const [currentStreak, setCurrentStreak] = useState(0);
  const [todayStreak, setTodayStreak] = useState<UserStreak | null>(null);
  const [courseProgress, setCourseProgress] = useState<UserCourseProgress[]>([]);
  const [dsaStats, setDsaStats] = useState({ solved: 0, attempted: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      loadDashboardData();
    }
  }, [user]);

  const loadDashboardData = async () => {
    setIsLoading(true);
    try {
      const [streak, todayData, allProgress, dsaData] = await Promise.all([
        progressService.getCurrentStreak(),
        progressService.getTodayStreak(),
        progressService.getAllCourseProgress(),
        progressService.getTodayDSAStats(),
      ]);

      setCurrentStreak(streak);
      setTodayStreak(todayData);
      setCourseProgress(allProgress);
      setDsaStats(dsaData);
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Please sign in to view your dashboard.</p>
      </div>
    );
  }

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  const todayActivity = todayStreak ? {
    dsa: todayStreak.dsa_questions_solved,
    dbms: todayStreak.dbms_topics_completed,
    os: todayStreak.os_topics_completed,
    cn: todayStreak.cn_topics_completed,
  } : { dsa: 0, dbms: 0, os: 0, cn: 0 };

  const totalActivity = Object.values(todayActivity).reduce((sum, val) => sum + val, 0);

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, {user.email?.split('@')[0]}!
        </h1>
        <p className="text-gray-600">Keep up the great work on your learning journey.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
            <Flame className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentStreak} days</div>
            <p className="text-xs text-muted-foreground">
              Keep going to maintain your streak!
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Activity</CardTitle>
            <Calendar className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalActivity} items</div>
            <p className="text-xs text-muted-foreground">
              Topics completed today
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Courses Started</CardTitle>
            <BookOpen className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{courseProgress.length}</div>
            <p className="text-xs text-muted-foreground">
              Learning paths in progress
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <Trophy className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {courseProgress.filter(p => p.status === 'completed').length}
            </div>
            <p className="text-xs text-muted-foreground">
              Courses completed
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Today's Progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{todayActivity.dsa}</div>
              <div className="text-sm text-blue-800">DSA Questions</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{todayActivity.dbms}</div>
              <div className="text-sm text-green-800">DBMS Topics</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">{todayActivity.os}</div>
              <div className="text-sm text-purple-800">OS Topics</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">{todayActivity.cn}</div>
              <div className="text-sm text-orange-800">CN Topics</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>DSA Progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{dsaStats.solved}</div>
              <div className="text-sm text-green-800">Questions Solved Today</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{dsaStats.attempted}</div>
              <div className="text-sm text-blue-800">Questions Attempted Today</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {courseProgress.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Your Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {courseProgress.map((progress) => {
                const course = coursesData[progress.course_id as keyof typeof coursesData];
                if (!course) return null;

                return (
                  <div key={progress.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <div>
                          <h3 className="font-medium">{course.title}</h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant={progress.status === 'completed' ? 'default' : 'secondary'}>
                              {progress.status === 'completed' ? 'Completed' : 'In Progress'}
                            </Badge>
                            <span className="text-sm text-gray-500">
                              {progress.progress_percentage}% complete
                            </span>
                          </div>
                        </div>
                      </div>
                      <Progress value={progress.progress_percentage} className="mt-2 h-2" />
                    </div>
                    <Link
                      to={`/courses/${progress.course_id}`}
                      className="ml-4 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Continue
                    </Link>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              to="/courses"
              className="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <BookOpen className="h-8 w-8 mx-auto mb-2 text-gray-400" />
              <div className="font-medium">Browse Courses</div>
              <div className="text-sm text-gray-500">Explore new learning paths</div>
            </Link>
            <Link
              to="/dsa/topics"
              className="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <Trophy className="h-8 w-8 mx-auto mb-2 text-gray-400" />
              <div className="font-medium">Practice DSA</div>
              <div className="text-sm text-gray-500">Solve coding problems</div>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDashboard;
