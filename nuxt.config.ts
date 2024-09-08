// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "@pinia/nuxt"],
  imports: {
    dirs: ["stores"],
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Pet | Guard",
    }
  },
  css: ["~/assets/icons/style.css", "vue-final-modal/style.css", "@/assets/main.css"],
  ssr:false,

  runtimeConfig: {
    public: {
      apiURL: process.env.API_BASE_URL,
      rollbarToken: process.env.ROLLBAR_TOKEN,
    },
  },
})