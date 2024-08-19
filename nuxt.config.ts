// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss" ],
 
  app:{
    pageTransition:{ name: "page", mode: "out-in" },
    head: {
      title: "Pet | Guard",
  }
  },
  css:["vue-final-modal/style.css"]
  
})