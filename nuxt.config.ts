// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/stylelint-module', '@pinia/nuxt'],
  css: ['~/assets/scss/main.scss'],
  runtimeConfig: {
    public: {
      apiBaseURL: process.env.API_BASE_URL,
    },
  },
});
