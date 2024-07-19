<script setup lang="ts">
import RecipeList from '@/components/recipes/RecipeList.vue';
</script>

<template>
  <div>
    <RecipeList />
    <NuxtLink to="/recipe"> New Recipe </NuxtLink>
  </div>
</template>
