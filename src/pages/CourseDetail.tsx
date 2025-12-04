
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { coursesData } from "@/data/coursesData";
import { progressService, UserCourseProgress } from "@/services/progressService";
import { useAuth } from "@/contexts/AuthContext";
import CourseHeader from "@/components/course/CourseHeader";
import ProgressTracker from "@/components/course/ProgressTracker";
import RoadmapTab from "@/components/course/RoadmapTab";
import ResourcesTab from "@/components/course/ResourcesTab";
import CertificationsTab from "@/components/course/CertificationsTab";
import CareerTab from "@/components/course/CareerTab";
import NotFound from "./NotFound";

const CourseDetail = () => {
  const { courseId } = useParams();
  const { toast } = useToast();
  const { user } = useAuth();
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);
  const [isLearningStarted, setIsLearningStarted] = useState(false);
  const [courseProgress, setCourseProgress] = useState<UserCourseProgress | null>(null);

  // Load progress from database for authenticated users, localStorage for guests
  useEffect(() => {
    if (courseId) {
      if (user) {
        loadDatabaseProgress();
      } else {
        loadLocalProgress();
      }
    }
  }, [courseId, user]);

  const loadDatabaseProgress = async () => {
    if (!courseId || !user) return;

    try {
      const progress = await progressService.getCourseProgress(courseId);
      if (progress) {
        setCourseProgress(progress);
        setIsLearningStarted(progress.status === 'in_progress' || progress.status === 'completed');
        
        // Load completed topics from localStorage (topics are still stored locally for granular tracking)
        const savedProgress = localStorage.getItem(`course-progress-${courseId}`);
        if (savedProgress) {
          setCompletedTopics(JSON.parse(savedProgress));
        }
      } else {
        // Check if user has local progress but no database record
        const savedProgress = localStorage.getItem(`course-progress-${courseId}`);
        const savedStarted = localStorage.getItem(`course-started-${courseId}`);
        
        if (savedProgress) {
          setCompletedTopics(JSON.parse(savedProgress));
        }
        if (savedStarted) {
          const started = JSON.parse(savedStarted);
          setIsLearningStarted(started);
          
          // If user has local progress, sync it to database
          if (started && savedProgress) {
            const topics = JSON.parse(savedProgress);
            await saveProgress(topics, started);
          }
        }
      }
    } catch (error) {
      console.error('Error loading course progress:', error);
    }
  };

  const loadLocalProgress = () => {
    if (!courseId) return;
    
    const savedProgress = localStorage.getItem(`course-progress-${courseId}`);
    const savedStarted = localStorage.getItem(`course-started-${courseId}`);
    if (savedProgress) {
      setCompletedTopics(JSON.parse(savedProgress));
    }
    if (savedStarted) {
      setIsLearningStarted(JSON.parse(savedStarted));
    }
  };

  // Save progress to both database and localStorage
  const saveProgress = async (topics: string[], started: boolean) => {
    if (!courseId) return;

    // Always save to localStorage for topic-level tracking
    localStorage.setItem(`course-progress-${courseId}`, JSON.stringify(topics));
    localStorage.setItem(`course-started-${courseId}`, JSON.stringify(started));

    // Save to database if user is authenticated
    if (user && started) {
      const course = coursesData[courseId as keyof typeof coursesData];
      if (course) {
        const totalTopics = course.roadmap.reduce((acc, phase) => acc + phase.topics.length, 0);
        const progressPercentage = totalTopics > 0 ? Math.round((topics.length / totalTopics) * 100) : 0;
        
        try {
          await progressService.updateCourseProgress(courseId, progressPercentage);
          // Reload course progress to get updated data
          const updatedProgress = await progressService.getCourseProgress(courseId);
          setCourseProgress(updatedProgress);
        } catch (error) {
          console.error('Error saving course progress:', error);
        }
      }
    }
  };

  const toggleTopicCompletion = async (topic: string) => {
    const newCompletedTopics = completedTopics.includes(topic)
      ? completedTopics.filter(t => t !== topic)
      : [...completedTopics, topic];
    
    setCompletedTopics(newCompletedTopics);
    await saveProgress(newCompletedTopics, isLearningStarted);
    
    toast({
      title: completedTopics.includes(topic) ? "Topic unmarked" : "Topic completed!",
      description: completedTopics.includes(topic) 
        ? `${topic} unmarked as incomplete` 
        : `Great job completing ${topic}`,
    });
  };

  const startLearningPath = async () => {
    setIsLearningStarted(true);
    
    if (user && courseId) {
      try {
        await progressService.startCourse(courseId);
        const progress = await progressService.getCourseProgress(courseId);
        setCourseProgress(progress);
      } catch (error) {
        console.error('Error starting course:', error);
      }
    }
    
    await saveProgress(completedTopics, true);
    
    toast({
      title: "Learning path started!",
      description: user 
        ? "Your progress will be tracked across all devices. Good luck!" 
        : "Your progress will be saved locally. Sign in to sync across devices!",
    });
  };

  const resetProgress = async () => {
    setCompletedTopics([]);
    setIsLearningStarted(false);
    setCourseProgress(null);
    
    if (courseId) {
      localStorage.removeItem(`course-progress-${courseId}`);
      localStorage.removeItem(`course-started-${courseId}`);
    }
    
    toast({
      title: "Progress reset",
      description: "Your learning progress has been reset.",
    });
  };

  const course = coursesData[courseId as keyof typeof coursesData];

  if (!course) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CourseHeader course={course} courseId={courseId!} />
        
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            {courseProgress && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-blue-900 mb-2">📊 Progress Synced</h3>
                <p className="text-blue-800 text-sm">
                  Your progress is automatically saved to your account and synced across all devices.
                  Last updated: {new Date(courseProgress.last_accessed).toLocaleDateString()}
                </p>
              </div>
            )}
          </div>
          <ProgressTracker 
            course={course}
            isLearningStarted={isLearningStarted}
            completedTopics={completedTopics}
            onStartLearning={startLearningPath}
            onResetProgress={resetProgress}
          />
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="roadmap" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="career">Career Path</TabsTrigger>
          </TabsList>

          <TabsContent value="roadmap">
            <RoadmapTab 
              course={course}
              isLearningStarted={isLearningStarted}
              completedTopics={completedTopics}
              onToggleTopicCompletion={toggleTopicCompletion}
            />
          </TabsContent>

          <TabsContent value="resources">
            <ResourcesTab course={course} />
          </TabsContent>

          <TabsContent value="certifications">
            <CertificationsTab course={course} />
          </TabsContent>

          <TabsContent value="career">
            <CareerTab course={course} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CourseDetail;
