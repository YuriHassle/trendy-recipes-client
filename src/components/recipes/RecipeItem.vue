<script setup lang="ts">
import { useRecipeStore } from '@/store/recipe';

const recipeStore = useRecipeStore();
const route = useRoute();

const recipeId = route.params.id;
const recipe = await recipeStore.loadRecipe(recipeId as string);

const { getEmbedCodeFromUrl } = useTikTok();
const embedVideo = await getEmbedCodeFromUrl(recipe.video?.url);
</script>

<template>
  <div class="recipe">
    <h2 class="recipe__title page-title">{{ recipe.title }}</h2>
    <p>{{ recipe.description }}</p>
    <div v-html="embedVideo"></div>
    <p>{{ recipe.ingredients }}</p>
    <p>{{ recipe.preparation }}</p>
  </div>
</template>

<style lang="scss" scoped>
.test {
  color: #000;
}
</style>
