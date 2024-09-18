import { gtag, image } from "./config";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/styles/index.scss"],
  components: ["~/components", "~/components/core"],
  modules: [
    "@nuxtjs/eslint-module",
    "nuxt-icon",
    ["@nuxt/image", image],
    ["nuxt-gtag", gtag],
    "@nuxtjs/google-fonts",
  ],
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

  googleFonts: {
    families: {
      Nunito: [400, 700],
      "Fira Code": [400],
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
});
