<script setup lang="ts">
import { useRecipeStore } from '@/store/recipe';
import { useFetchRecipes } from '@/repository/recipe';

const recipeStore = useRecipeStore();
const { data, error, pending } = await useFetchRecipes();

if (error.value) console.error(error.value);
recipeStore.addRecipes(data.value || []);
</script>

<template>
  <div class="recipes section">
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Failed to load recipes</div>
    <ul v-else class="recipes__list">
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
