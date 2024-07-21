<script setup lang="ts">
import RecipeList from '@/components/recipes/RecipeList.vue';
</script>

<template>
  <div>
    <RecipeList />
    <div class="section">
      <NuxtLink to="/recipes">
        <button class="btn btn--primary">+ New Recipe</button>
      </NuxtLink>
    </div>
  </div>
</template>
