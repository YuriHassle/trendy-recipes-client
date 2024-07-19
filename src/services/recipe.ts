import type { Recipe, RecipePayload } from '@/models/recipe';

function getBaseUrl(): string {
  const config = useRuntimeConfig();
  return config.public.apiBaseURL;
}

export const fetchRecipes = async (): Promise<Recipe[]> => {
  const { data, error } = await useFetch('/recipes', { baseURL: getBaseUrl() });
  if (error.value) throw new Error('Error fetching recipes');
  return data.value as Recipe[];
};

export const addRecipe = async (recipe: RecipePayload): Promise<Recipe> => {
  const { data, error } = await useFetch('/recipes', {
    baseURL: getBaseUrl(),
    method: 'POST',
    body: recipe,
  });
  if (error.value) throw new Error('Error creating recipe');
  return data.value as Recipe;
};
