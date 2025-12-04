
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

type DSATopic = Tables<"dsa_topics">;

const DSATopicManager = () => {
  const [topics, setTopics] = useState<DSATopic[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingTopic, setEditingTopic] = useState<DSATopic | null>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    difficulty: "Easy",
    category: "",
    icon: "",
    color: "blue",
    order_index: 0
  });

  useEffect(() => {
    fetchTopics();
  }, []);

  const fetchTopics = async () => {
    try {
      const { data, error } = await supabase
        .from('dsa_topics')
        .select('*')
        .order('order_index', { ascending: true });

      if (error) throw error;
      setTopics(data || []);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch DSA topics",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (editingTopic) {
        const { error } = await supabase
          .from('dsa_topics')
          .update(formData)
          .eq('id', editingTopic.id);

        if (error) throw error;
        toast({ title: "Success", description: "Topic updated successfully" });
      } else {
        const { error } = await supabase
          .from('dsa_topics')
          .insert([formData]);

        if (error) throw error;
        toast({ title: "Success", description: "Topic created successfully" });
      }

      resetForm();
      fetchTopics();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save topic",
        variant: "destructive",
      });
    }
  };

  const handleEdit = (topic: DSATopic) => {
    setEditingTopic(topic);
    setFormData({
      title: topic.title,
      description: topic.description || "",
      difficulty: topic.difficulty,
      category: topic.category,
      icon: topic.icon || "",
      color: topic.color || "blue",
      order_index: topic.order_index || 0
    });
    setShowForm(true);
  };

  const handleDelete = async (topicId: string) => {
    if (!confirm("Are you sure you want to delete this topic?")) return;

    try {
      const { error } = await supabase
        .from('dsa_topics')
        .delete()
        .eq('id', topicId);

      if (error) throw error;
      toast({ title: "Success", description: "Topic deleted successfully" });
      fetchTopics();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete topic",
        variant: "destructive",
      });
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      difficulty: "Easy",
      category: "",
      icon: "",
      color: "blue",
      order_index: 0
    });
    setShowForm(false);
    setEditingTopic(null);
  };

  if (isLoading) {
    return <div>Loading topics...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">DSA Topics</h3>
        <Button onClick={() => setShowForm(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Topic
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>{editingTopic ? "Edit Topic" : "Add New Topic"}</CardTitle>
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
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    required
                  />
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
                  <Label htmlFor="icon">Icon</Label>
                  <Input
                    id="icon"
                    value={formData.icon}
                    onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                    placeholder="lucide icon name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="order_index">Order</Label>
                  <Input
                    id="order_index"
                    type="number"
                    value={formData.order_index}
                    onChange={(e) => setFormData({ ...formData, order_index: parseInt(e.target.value) })}
                  />
                </div>
              </div>

              <div className="flex space-x-2">
                <Button type="submit">
                  {editingTopic ? "Update Topic" : "Create Topic"}
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
        {topics.map((topic) => (
          <Card key={topic.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="text-lg font-semibold">{topic.title}</h4>
                  <p className="text-gray-600 mt-1">{topic.description}</p>
                  <div className="flex space-x-4 mt-3 text-sm text-gray-500">
                    <span>Category: {topic.category}</span>
                    <span>Difficulty: {topic.difficulty}</span>
                    <span>Order: {topic.order_index}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(topic)}
                  >
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(topic.id)}
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

export default DSATopicManager;
