import { fileURLToPath } from "url";

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
    "@nuxt/test-utils/module",
  ],

  build: {
    transpile: ["@radix-vue"],
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        // types: ["vitest/globals"],
      },
      exclude: [
        fileURLToPath(new URL("../shared/**/*.test.ts", import.meta.url)),
        fileURLToPath(new URL("../shared/**/*.config.ts", import.meta.url)),
      ],
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
  },

  ssr: false,

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
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },

  compatibilityDate: "2025-02-13",
});
