import type { Recipe } from '@/models/recipe';

export const useRecipeStore = defineStore('recipeStore', () => {
  const recipes = ref<Recipe[]>([]);

  async function addRecipes(newRecipes: Recipe[]): Promise<void> {
    recipes.value = newRecipes;
  }

  async function addRecipe(recipe: Recipe | null): Promise<void> {
    if (!recipe) return;
    recipes.value.push(recipe);
  }

  return {
    recipes,
    addRecipes,
    addRecipe,
  };
});
