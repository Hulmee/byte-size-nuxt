// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', "@nuxtjs/supabase", "@nuxtjs/seo"],
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
    url: process.env.CANONICAL_BASE_URL,
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },
  devtools: { enabled: true },
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
  },
})