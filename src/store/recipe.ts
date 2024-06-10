import { fetchRecipes } from '@/services/recipe';
import type { Recipe } from '@/models/recipe';

export const useRecipeStore = defineStore('recipeStore', () => {
  const recipes = ref<Recipe[]>([]);

  async function loadRecipes() {
    recipes.value = await fetchRecipes();
  }

  return {
    recipes,
    loadRecipes,
  };
});
