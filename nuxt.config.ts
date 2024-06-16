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
  site: {
    url: process.env.CANONICAL_BASE_URL
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "@nuxtjs/supabase", "@nuxtjs/seo"],
  supabase: {
    redirect: false
  },
  tailwindcss:
  {
    config: {
      plugins: [require("daisyui")],
      daisyui: {
        themes: ["luxury", "retro"],
        // themes: [],
      },
    }
  }
})