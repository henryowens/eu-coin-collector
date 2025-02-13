import { googleFonts, gtag, image, shadcn, supabase } from "./config";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/styles/index.scss"],
  components: ["~/components", "~/components/core"],

  modules: [
    "@nuxtjs/eslint-module",
    "nuxt-icon",
    ["@nuxt/image", image],
    ["nuxt-gtag", gtag],
    "@nuxtjs/tailwindcss",
    ["shadcn-nuxt", shadcn],
    "@nuxtjs/color-mode",
    ["@nuxtjs/google-fonts", googleFonts],
    ["@nuxtjs/supabase", supabase],
    "nuxt-lodash",
    "@vueuse/nuxt",
  ],

  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
  },

  ssr: true,

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    public: {
      env: process.env.NUXT_PUBLIC_ENV,
    },
  },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },

  compatibilityDate: "2025-02-13",
});
