import { fetchRecipes, addRecipe } from '@/services/recipe';
import type { Recipe, RecipePayload } from '@/models/recipe';

export const useRecipeStore = defineStore('recipeStore', () => {
  const recipes = ref<Recipe[]>([]);

  async function loadRecipes(): Promise<void> {
    recipes.value = await fetchRecipes();
  }

  async function createRecipe(recipePayload: RecipePayload): Promise<void> {
    const recipe = await addRecipe(recipePayload);
    recipes.value.push(recipe);
  }

  return {
    recipes,
    loadRecipes,
    createRecipe,
  };
});
