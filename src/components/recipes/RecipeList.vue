<script setup lang="ts">
import { useRecipeStore } from '@/store/recipe';

const recipeStore = useRecipeStore();
await recipeStore.loadRecipes();
</script>

<template>
  <div class="recipes">
    <h2 class="recipes__title">Recipes</h2>
    <ul class="recipes__list">
      <li v-for="recipe in recipeStore.recipes" :key="recipe.id">
        <h2>{{ recipe.title }}</h2>
        <p>{{ recipe.description }}</p>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.recipes {
  &__list {
    list-style: none;
  }
}
</style>
