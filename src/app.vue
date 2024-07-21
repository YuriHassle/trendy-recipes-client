<script setup lang="ts">
import PageHeader from '@/components/molecules/PageHeader.vue';
import PageFooter from '@/components/molecules/PageFooter.vue';
</script>

<template>
  <div>
    <PageHeader />
    <main>
      <NuxtPage />
    </main>
    <PageFooter />
  </div>
</template>
