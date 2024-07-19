<script setup lang="ts">
import PageHeader from '@/components/molecules/PageHeader.vue';
</script>

<template>
  <div>
    <PageHeader />
    <main class="page-container">
      <NuxtPage />
    </main>
  </div>
</template>

<style scoped lang="scss">
.page-container {
  padding: 2rem 2rem 3.5rem;
}
</style>
