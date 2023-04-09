export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      entries: {
        Row: {
          content: string
          createdAt: string
          embedding: unknown | null
          goal_id: string | null
          id: string
          metadata: Json | null
          type: string
          updatedAt: string | null
          user_id: string | null
        }
        Insert: {
          content: string
          createdAt?: string
          embedding?: unknown | null
          goal_id?: string | null
          id?: string
          metadata?: Json | null
          type?: string
          updatedAt?: string | null
          user_id?: string | null
        }
        Update: {
          content?: string
          createdAt?: string
          embedding?: unknown | null
          goal_id?: string | null
          id?: string
          metadata?: Json | null
          type?: string
          updatedAt?: string | null
          user_id?: string | null
        }
      }
      entry_associations: {
        Row: {
          created_at: string | null
          id: string
          type: string
        }
        Insert: {
          created_at?: string | null
          id: string
          type: string
        }
        Update: {
          created_at?: string | null
          id?: string
          type?: string
        }
      }
      goals: {
        Row: {
          created_at: string | null
          goal: string
          id: string
          metadata: Json | null
          slug: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          goal: string
          id?: string
          metadata?: Json | null
          slug: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          goal?: string
          id?: string
          metadata?: Json | null
          slug?: string
          user_id?: string | null
        }
      }
      links: {
        Row: {
          created_at: string | null
          entry_id: string | null
          id: string
          metadata: Json | null
          url: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          entry_id?: string | null
          id?: string
          metadata?: Json | null
          url?: string | null
          user_id?: string
        }
        Update: {
          created_at?: string | null
          entry_id?: string | null
          id?: string
          metadata?: Json | null
          url?: string | null
          user_id?: string
        }
      }
      messages: {
        Row: {
          bcc: string | null
          cc: string | null
          created: string | null
          deliveryresult: Json | null
          deliverysignature: Json | null
          html_body: string | null
          id: string
          log: Json | null
          recipient: string | null
          sender: string | null
          status: string | null
          subject: string | null
          text_body: string | null
        }
        Insert: {
          bcc?: string | null
          cc?: string | null
          created?: string | null
          deliveryresult?: Json | null
          deliverysignature?: Json | null
          html_body?: string | null
          id?: string
          log?: Json | null
          recipient?: string | null
          sender?: string | null
          status?: string | null
          subject?: string | null
          text_body?: string | null
        }
        Update: {
          bcc?: string | null
          cc?: string | null
          created?: string | null
          deliveryresult?: Json | null
          deliverysignature?: Json | null
          html_body?: string | null
          id?: string
          log?: Json | null
          recipient?: string | null
          sender?: string | null
          status?: string | null
          subject?: string | null
          text_body?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      set_goal_user_id: {
        Args: {
          user_uuid: string
          user_email: string
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
