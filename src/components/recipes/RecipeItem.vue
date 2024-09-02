<script setup lang="ts">
import RecipeVideo from '@/components/recipes/RecipeVideo.vue';
import { useFetchRecipe } from '@/repository/recipe';

const route = useRoute();

const recipeId = route.params.id as string;

const { data: recipe, error, pending } = await useFetchRecipe(recipeId);

if (error.value) console.error(error.value);
</script>

<template>
  <div v-if="pending">Loading...</div>
  <div v-else-if="error">Failed to load the recipe</div>
  <div v-else-if="recipe" class="recipe">
    <h2 class="recipe__title page-title">{{ recipe.title }}</h2>
    <p>{{ recipe.description }}</p>
    <RecipeVideo :url="recipe.video?.url" />
    <p>{{ recipe.ingredients }}</p>
    <p>{{ recipe.preparation }}</p>
  </div>
</template>

<style lang="scss" scoped>
.test {
  color: #000;
}
</style>
