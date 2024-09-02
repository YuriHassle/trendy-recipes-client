import type { Recipe, RecipePayload } from '@/models/recipe';
import { getAPI } from '@/utils/api';

export async function useFetchRecipes() {
  return useFetch<Recipe[]>('/recipes', { $fetch: getAPI<Recipe[]>(useNuxtApp()) });
}

export async function useFetchRecipe(id: string) {
  return useFetch<Recipe>(`/recipes/${id}`, { $fetch: getAPI<Recipe>(useNuxtApp()) });
}

export async function useAddRecipe(recipe: RecipePayload) {
  return getAPI<Recipe>(useNuxtApp())('/recipes', { method: 'post', body: recipe });
}
