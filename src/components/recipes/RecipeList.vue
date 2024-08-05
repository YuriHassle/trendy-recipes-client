<script setup lang="ts">
import { useRecipeStore } from '@/store/recipe';

const recipeStore = useRecipeStore();
await recipeStore.loadRecipes();
</script>

<template>
  <div class="recipes section">
    <ul class="recipes__list">
      <li
        v-for="recipe in recipeStore.recipes"
        :key="recipe.id"
        class="recipes__card card card--clickable"
      >
        <NuxtLink :to="{ name: 'recipes-id', params: { id: recipe.id } }">
          <h2 class="card__title">{{ recipe.title }}</h2>
          <p>{{ recipe.description }}</p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.recipes {
  &__list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__card {
    display: flex;
    flex-direction: column;
  }
}
</style>
