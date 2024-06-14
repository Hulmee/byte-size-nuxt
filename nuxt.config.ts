// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'UTF-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en',
      },
    }
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "@nuxtjs/supabase"],
  supabase: {
    redirect: false
  }
})
