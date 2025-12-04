export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      course_resources: {
        Row: {
          course_key: string
          created_at: string | null
          created_by: string | null
          id: string
          is_free: boolean | null
          name: string
          platform: string | null
          price: string | null
          type: string
          url: string | null
        }
        Insert: {
          course_key: string
          created_at?: string | null
          created_by?: string | null
          id?: string
          is_free?: boolean | null
          name: string
          platform?: string | null
          price?: string | null
          type: string
          url?: string | null
        }
        Update: {
          course_key?: string
          created_at?: string | null
          created_by?: string | null
          id?: string
          is_free?: boolean | null
          name?: string
          platform?: string | null
          price?: string | null
          type?: string
          url?: string | null
        }
        Relationships: []
      }
      courses: {
        Row: {
          color: string | null
          course_key: string
          created_at: string | null
          created_by: string | null
          description: string | null
          duration: string | null
          id: string
          level: string | null
          rating: number | null
          students: number | null
          title: string
          updated_at: string | null
        }
        Insert: {
          color?: string | null
          course_key: string
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          duration?: string | null
          id?: string
          level?: string | null
          rating?: number | null
          students?: number | null
          title: string
          updated_at?: string | null
        }
        Update: {
          color?: string | null
          course_key?: string
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          duration?: string | null
          id?: string
          level?: string | null
          rating?: number | null
          students?: number | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      dsa_questions: {
        Row: {
          company_tags: string[] | null
          concepts: string[] | null
          created_at: string
          description: string | null
          difficulty: string
          hints: string[] | null
          id: string
          leetcode_number: number | null
          leetcode_url: string | null
          solution_approach: string | null
          space_complexity: string | null
          time_complexity: string | null
          title: string
          topic_id: string | null
        }
        Insert: {
          company_tags?: string[] | null
          concepts?: string[] | null
          created_at?: string
          description?: string | null
          difficulty: string
          hints?: string[] | null
          id?: string
          leetcode_number?: number | null
          leetcode_url?: string | null
          solution_approach?: string | null
          space_complexity?: string | null
          time_complexity?: string | null
          title: string
          topic_id?: string | null
        }
        Update: {
          company_tags?: string[] | null
          concepts?: string[] | null
          created_at?: string
          description?: string | null
          difficulty?: string
          hints?: string[] | null
          id?: string
          leetcode_number?: number | null
          leetcode_url?: string | null
          solution_approach?: string | null
          space_complexity?: string | null
          time_complexity?: string | null
          title?: string
          topic_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "dsa_questions_topic_id_fkey"
            columns: ["topic_id"]
            isOneToOne: false
            referencedRelation: "dsa_topics"
            referencedColumns: ["id"]
          },
        ]
      }
      dsa_topics: {
        Row: {
          category: string
          color: string | null
          created_at: string
          description: string | null
          difficulty: string
          icon: string | null
          id: string
          order_index: number | null
          title: string
        }
        Insert: {
          category: string
          color?: string | null
          created_at?: string
          description?: string | null
          difficulty: string
          icon?: string | null
          id?: string
          order_index?: number | null
          title: string
        }
        Update: {
          category?: string
          color?: string | null
          created_at?: string
          description?: string | null
          difficulty?: string
          icon?: string | null
          id?: string
          order_index?: number | null
          title?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string | null
          email: string | null
          full_name: string | null
          id: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      user_course_progress: {
        Row: {
          completed_at: string | null
          course_id: string
          id: string
          last_accessed: string
          progress_percentage: number | null
          started_at: string
          status: string
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          course_id: string
          id?: string
          last_accessed?: string
          progress_percentage?: number | null
          started_at?: string
          status?: string
          user_id: string
        }
        Update: {
          completed_at?: string | null
          course_id?: string
          id?: string
          last_accessed?: string
          progress_percentage?: number | null
          started_at?: string
          status?: string
          user_id?: string
        }
        Relationships: []
      }
      user_course_selections: {
        Row: {
          course_id: string
          id: string
          selected_at: string | null
          user_id: string
        }
        Insert: {
          course_id: string
          id?: string
          selected_at?: string | null
          user_id: string
        }
        Update: {
          course_id?: string
          id?: string
          selected_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_question_progress: {
        Row: {
          attempts: number | null
          created_at: string
          id: string
          last_attempted: string | null
          notes: string | null
          question_id: string | null
          solved_at: string | null
          status: string
          time_taken_minutes: number | null
          user_id: string
        }
        Insert: {
          attempts?: number | null
          created_at?: string
          id?: string
          last_attempted?: string | null
          notes?: string | null
          question_id?: string | null
          solved_at?: string | null
          status?: string
          time_taken_minutes?: number | null
          user_id: string
        }
        Update: {
          attempts?: number | null
          created_at?: string
          id?: string
          last_attempted?: string | null
          notes?: string | null
          question_id?: string | null
          solved_at?: string | null
          status?: string
          time_taken_minutes?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_question_progress_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "dsa_questions"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      user_streaks: {
        Row: {
          cn_topics_completed: number | null
          created_at: string
          dbms_topics_completed: number | null
          dsa_easy_solved: number | null
          dsa_hard_solved: number | null
          dsa_medium_solved: number | null
          dsa_questions_solved: number | null
          dsa_topics_practiced: number | null
          id: string
          os_topics_completed: number | null
          streak_date: string
          updated_at: string
          user_id: string
        }
        Insert: {
          cn_topics_completed?: number | null
          created_at?: string
          dbms_topics_completed?: number | null
          dsa_easy_solved?: number | null
          dsa_hard_solved?: number | null
          dsa_medium_solved?: number | null
          dsa_questions_solved?: number | null
          dsa_topics_practiced?: number | null
          id?: string
          os_topics_completed?: number | null
          streak_date?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          cn_topics_completed?: number | null
          created_at?: string
          dbms_topics_completed?: number | null
          dsa_easy_solved?: number | null
          dsa_hard_solved?: number | null
          dsa_medium_solved?: number | null
          dsa_questions_solved?: number | null
          dsa_topics_practiced?: number | null
          id?: string
          os_topics_completed?: number | null
          streak_date?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_current_streak: {
        Args: { user_uuid: string }
        Returns: number
      }
      has_role: {
        Args: {
          _user_id: string
          _role: Database["public"]["Enums"]["app_role"]
        }
        Returns: boolean
      }
      make_user_admin: {
        Args: { user_email: string }
        Returns: undefined
      }
    }
    Enums: {
      app_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
    },
  },
} as const
