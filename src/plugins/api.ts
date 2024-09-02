export default defineNuxtPlugin(() => {
  const api = $fetch.create({
    baseURL: useRuntimeConfig().public.apiBaseURL as string,
  });

  return {
    provide: {
      api,
    },
  };
});
