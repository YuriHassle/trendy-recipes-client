<script setup lang="ts">
import { useTikTokEmbeddedCode } from '@/repository/tiktok';

type RecipeVideoProps = {
  url: string | undefined;
};

const props = defineProps<RecipeVideoProps>();

const { data: tikTokIframe, error, pending } = await useTikTokEmbeddedCode(props.url);
if (error.value) console.error(error.value);

// If iframe is loaded in the client-side, the script has to be manually loaded
if (tikTokIframe && import.meta.client) {
  const script = document.createElement('script');
  script.src = 'https://www.tiktok.com/embed.js';
  script.async = true;
  document.body.appendChild(script);
}
</script>

<template>
  <div v-if="pending">Loading Video...</div>
  <div v-else-if="error">Failed to load the video</div>
  <div v-else-if="tikTokIframe" v-html="tikTokIframe.html"></div>
</template>
