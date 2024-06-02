<script setup lang="ts">
import PageHeader from '~/components/molecules/PageHeader.vue';
</script>

<template>
  <div>
    <PageHeader />
    <div class="page-container">
      <NuxtPage />
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-container {
  padding: 2rem;
}
</style>
