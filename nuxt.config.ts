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
    url: process.env.CANONICAL_BASE_URL || "https://www.bytesz.link/",
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
    name: 'Byte Size Link'
  },
  robots: {
    disallow: ['/_nuxt', '/login', '/confirm'],
    allow: ['/', '/about']
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
      },
    }
  },
})