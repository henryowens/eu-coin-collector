export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      base_coins: {
        Row: {
          id: string;
          image: string;
          name: string;
          value: number;
        };
        Insert: {
          id?: string;
          image: string;
          name: string;
          value: number;
        };
        Update: {
          id?: string;
          image?: string;
          name?: string;
          value?: number;
        };
        Relationships: [];
      };
      coin_sets: {
        Row: {
          country_id: string;
          id: string;
          priority: number | null;
          title: string | null;
        };
        Insert: {
          country_id: string;
          id?: string;
          priority?: number | null;
          title?: string | null;
        };
        Update: {
          country_id?: string;
          id?: string;
          priority?: number | null;
          title?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "coin_sets_country_id_fkey";
            columns: ["country_id"];
            isOneToOne: false;
            referencedRelation: "countries";
            referencedColumns: ["id"];
          },
        ];
      };
      coins: {
        Row: {
          base_coin_id: string;
          coin_set_id: string;
          id: string;
          image: string;
        };
        Insert: {
          base_coin_id: string;
          coin_set_id: string;
          id?: string;
          image: string;
        };
        Update: {
          base_coin_id?: string;
          coin_set_id?: string;
          id?: string;
          image?: string;
        };
        Relationships: [
          {
            foreignKeyName: "coins_base_coin_id_fkey";
            columns: ["base_coin_id"];
            isOneToOne: false;
            referencedRelation: "base_coins";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "coins_coin_set_id_fkey";
            columns: ["coin_set_id"];
            isOneToOne: false;
            referencedRelation: "coin_sets";
            referencedColumns: ["id"];
          },
        ];
      };
      countries: {
        Row: {
          background_color: string;
          flag: string;
          id: string;
          locale: string;
          name: string;
          normalised_name: string;
          slug: string | null;
          text_color: string;
        };
        Insert: {
          background_color: string;
          flag: string;
          id?: string;
          locale: string;
          name: string;
          normalised_name: string;
          slug?: string | null;
          text_color: string;
        };
        Update: {
          background_color?: string;
          flag?: string;
          id?: string;
          locale?: string;
          name?: string;
          normalised_name?: string;
          slug?: string | null;
          text_color?: string;
        };
        Relationships: [];
      };
      selected_coins: {
        Row: {
          coin_id: string;
          id: string;
          selected_at: string;
          user_id: string;
        };
        Insert: {
          coin_id: string;
          id?: string;
          selected_at?: string;
          user_id: string;
        };
        Update: {
          coin_id?: string;
          id?: string;
          selected_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "selected_coins_coin_id_fkey";
            columns: ["coin_id"];
            isOneToOne: false;
            referencedRelation: "coins";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;
