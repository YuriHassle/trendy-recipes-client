// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/stylelint-module'],
  css: ['~/assets/scss/main.scss'],
});
