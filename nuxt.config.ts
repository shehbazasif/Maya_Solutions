// nuxt.config.ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  devServer: {
    port: 3005,
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "@vueuse/nuxt",
    "@hypernym/nuxt-anime",
  ],
});
