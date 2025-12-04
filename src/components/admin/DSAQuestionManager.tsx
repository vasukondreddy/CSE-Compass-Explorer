import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Edit2, Trash2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Tables } from "@/integrations/supabase/types";

type DSAQuestion = Tables<"dsa_questions">;
type DSATopic = Tables<"dsa_topics">;

const DSAQuestionManager = () => {
  const [questions, setQuestions] = useState<DSAQuestion[]>([]);
  const [topics, setTopics] = useState<DSATopic[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState<DSAQuestion | null>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    difficulty: "Easy",
    topic_id: "",
    leetcode_number: "",
    leetcode_url: "",
    time_complexity: "",
    space_complexity: "",
    solution_approach: "",
    company_tags: "",
    concepts: "",
    hints: ""
  });

  useEffect(() => {
    fetchQuestions();
    fetchTopics();
  }, []);

  const fetchQuestions = async () => {
    try {
      const { data, error } = await supabase
        .from('dsa_questions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setQuestions(data || []);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch DSA questions",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const fetchTopics = async () => {
    try {
      const { data, error } = await supabase
        .from('dsa_topics')
        .select('*')
        .order('title', { ascending: true });

      if (error) throw error;
      setTopics(data || []);
    } catch (error) {
      console.error("Failed to fetch topics:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const questionData = {
        ...formData,
        leetcode_number: formData.leetcode_number ? parseInt(formData.leetcode_number) : null,
        company_tags: formData.company_tags ? formData.company_tags.split(',').map(tag => tag.trim()) : null,
        concepts: formData.concepts ? formData.concepts.split(',').map(concept => concept.trim()) : null,
        hints: formData.hints ? formData.hints.split('\n').filter(hint => hint.trim()) : null,
      };

      if (editingQuestion) {
        const { error } = await supabase
          .from('dsa_questions')
          .update(questionData)
          .eq('id', editingQuestion.id);

        if (error) throw error;
        toast({ title: "Success", description: "Question updated successfully" });
      } else {
        const { error } = await supabase
          .from('dsa_questions')
          .insert([questionData]);

        if (error) throw error;
        toast({ title: "Success", description: "Question created successfully" });
      }

      resetForm();
      fetchQuestions();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save question",
        variant: "destructive",
      });
    }
  };

  const handleEdit = (question: DSAQuestion) => {
    setEditingQuestion(question);
    setFormData({
      title: question.title,
      description: question.description || "",
      difficulty: question.difficulty,
      topic_id: question.topic_id || "",
      leetcode_number: question.leetcode_number?.toString() || "",
      leetcode_url: question.leetcode_url || "",
      time_complexity: question.time_complexity || "",
      space_complexity: question.space_complexity || "",
      solution_approach: question.solution_approach || "",
      company_tags: question.company_tags?.join(', ') || "",
      concepts: question.concepts?.join(', ') || "",
      hints: question.hints?.join('\n') || ""
    });
    setShowForm(true);
  };

  const handleDelete = async (questionId: string) => {
    if (!confirm("Are you sure you want to delete this question?")) return;

    try {
      const { error } = await supabase
        .from('dsa_questions')
        .delete()
        .eq('id', questionId);

      if (error) throw error;
      toast({ title: "Success", description: "Question deleted successfully" });
      fetchQuestions();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete question",
        variant: "destructive",
      });
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      difficulty: "Easy",
      topic_id: "",
      leetcode_number: "",
      leetcode_url: "",
      time_complexity: "",
      space_complexity: "",
      solution_approach: "",
      company_tags: "",
      concepts: "",
      hints: ""
    });
    setShowForm(false);
    setEditingQuestion(null);
  };

  if (isLoading) {
    return <div>Loading questions...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">DSA Questions</h3>
        <Button onClick={() => setShowForm(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Question
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>{editingQuestion ? "Edit Question" : "Add New Question"}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="topic_id">Topic</Label>
                  <Select value={formData.topic_id} onValueChange={(value) => setFormData({ ...formData, topic_id: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      {topics.map((topic) => (
                        <SelectItem key={topic.id} value={topic.id}>
                          {topic.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="difficulty">Difficulty</Label>
                  <Select value={formData.difficulty} onValueChange={(value) => setFormData({ ...formData, difficulty: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Easy">Easy</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="Hard">Hard</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="leetcode_number">LeetCode Number</Label>
                  <Input
                    id="leetcode_number"
                    type="number"
                    value={formData.leetcode_number}
                    onChange={(e) => setFormData({ ...formData, leetcode_number: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="leetcode_url">LeetCode URL</Label>
                  <Input
                    id="leetcode_url"
                    value={formData.leetcode_url}
                    onChange={(e) => setFormData({ ...formData, leetcode_url: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="time_complexity">Time Complexity</Label>
                  <Input
                    id="time_complexity"
                    value={formData.time_complexity}
                    onChange={(e) => setFormData({ ...formData, time_complexity: e.target.value })}
                    placeholder="e.g., O(n)"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="space_complexity">Space Complexity</Label>
                  <Input
                    id="space_complexity"
                    value={formData.space_complexity}
                    onChange={(e) => setFormData({ ...formData, space_complexity: e.target.value })}
                    placeholder="e.g., O(1)"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="solution_approach">Solution Approach</Label>
                <Textarea
                  id="solution_approach"
                  value={formData.solution_approach}
                  onChange={(e) => setFormData({ ...formData, solution_approach: e.target.value })}
                  rows={2}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company_tags">Company Tags (comma-separated)</Label>
                  <Input
                    id="company_tags"
                    value={formData.company_tags}
                    onChange={(e) => setFormData({ ...formData, company_tags: e.target.value })}
                    placeholder="Google, Amazon, Microsoft"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="concepts">Concepts (comma-separated)</Label>
                  <Input
                    id="concepts"
                    value={formData.concepts}
                    onChange={(e) => setFormData({ ...formData, concepts: e.target.value })}
                    placeholder="Array, Two Pointers, Hash Table"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="hints">Hints (one per line)</Label>
                <Textarea
                  id="hints"
                  value={formData.hints}
                  onChange={(e) => setFormData({ ...formData, hints: e.target.value })}
                  rows={3}
                  placeholder="First hint&#10;Second hint&#10;Third hint"
                />
              </div>

              <div className="flex space-x-2">
                <Button type="submit">
                  {editingQuestion ? "Update Question" : "Create Question"}
                </Button>
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4">
        {questions.map((question) => (
          <Card key={question.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="text-lg font-semibold">{question.title}</h4>
                  <p className="text-gray-600 mt-1">{question.description}</p>
                  <div className="flex space-x-4 mt-3 text-sm text-gray-500">
                    <span>Difficulty: {question.difficulty}</span>
                    {question.leetcode_number && <span>LC #{question.leetcode_number}</span>}
                    <span>Complexity: {question.time_complexity} / {question.space_complexity}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(question)}
                  >
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(question.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DSAQuestionManager;
