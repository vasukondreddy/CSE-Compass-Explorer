
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, List } from "lucide-react";
import DSATopicManager from "./DSATopicManager";
import DSAQuestionManager from "./DSAQuestionManager";

const DSAManager = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">DSA Content Management</h2>
      
      <Tabs defaultValue="topics" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="topics" className="flex items-center space-x-2">
            <List className="h-4 w-4" />
            <span>Topics</span>
          </TabsTrigger>
          <TabsTrigger value="questions" className="flex items-center space-x-2">
            <Code className="h-4 w-4" />
            <span>Questions</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="topics">
          <DSATopicManager />
        </TabsContent>

        <TabsContent value="questions">
          <DSAQuestionManager />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DSAManager;
