<script setup lang="ts">
import RecipeList from '~/components/recipes/RecipeList.vue';
import RecipeForm from '~/components/recipes/RecipeForm.vue';
</script>

<template>
  <div>
    <RecipeList />
    <hr />
    <RecipeForm />
  </div>
</template>

<style lang="scss" scoped>
.test {
  color: red;
}
</style>
