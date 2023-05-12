// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n", '@nuxt/devtools', '@vueuse/nuxt', '@formkit/nuxt', '@nuxtjs/fontaine'],
  i18n: {
    vueI18n: "./plugins/i18n.config.ts",
  },
  css: ["@/assets/css/global.css"],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
});
