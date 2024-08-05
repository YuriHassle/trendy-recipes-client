import { fetchRecipes, fetchRecipe, addRecipe } from '@/services/recipe';
import type { Recipe, RecipePayload } from '@/models/recipe';

export const useRecipeStore = defineStore('recipeStore', () => {
  const recipes = ref<Recipe[]>([]);

  async function loadRecipes(): Promise<void> {
    recipes.value = await fetchRecipes();
  }

  async function loadRecipe(id: string): Promise<Recipe> {
    return await fetchRecipe(id);
  }

  async function createRecipe(recipePayload: RecipePayload): Promise<void> {
    const recipe = await addRecipe(recipePayload);
    if (!recipe) return;
    recipes.value.push(recipe);
  }

  return {
    recipes,
    loadRecipes,
    loadRecipe,
    createRecipe,
  };
});
