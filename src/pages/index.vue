<script setup lang="ts">
import { useRecipeStore } from '@/store/recipe';

const recipeStore = useRecipeStore();
await recipeStore.loadRecipes();
</script>

<template>
  <div>
    <h1 class="home__title">Recipes</h1>
    <ul class="recipes">
      <li v-for="recipe in recipeStore.recipes" :key="recipe.id">
        <h2>{{ recipe.title }}</h2>
        <p>{{ recipe.description }}</p>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.recipes {
  list-style: none;
  color: bisque;
}
</style>
