export interface Recipe {
  id: number;
  user_id: number;
  video_id: number;
  language_id: number;
  title: string;
  description: string;
  ingredients: string;
  preparation: string;
  active: boolean;
  created_at: string;
  updated_at: string;
}

export interface RecipePayload {
  user_id: number;
  video_id?: number;
  video?: {
    url: string;
    source: string;
  };
  language_id: number;
  title: string;
  description: string;
  ingredients: string;
  preparation: string;
}
