<template>
  <header class="header">
    <NuxtLink :to="{ name: 'index' }">
      <h1 class="header__title">Trendy Recipes</h1>
    </NuxtLink>
  </header>
</template>

<style scoped lang="scss">
.header {
  background-color: var(--color-primary);
  padding: 1.5rem 1rem;
  text-align: center;

  &__title {
    font-size: 3rem;
    color: var(--color-text-contrast);
  }
}
</style>
