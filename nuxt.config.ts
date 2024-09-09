import { gtag, image } from "./config";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/styles/index.scss"],
  components: ["~/components", "~/components/core", "~/components/forms"],
  modules: [
    "@nuxtjs/eslint-module",
    "nuxt-icon",
    ["@nuxt/image", image],
    ["nuxt-gtag", gtag],
    "nuxt-lodash",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Nunito: {
            wght: [200, 300, 400, 600, 700, 800, 900, 1000],
          },
        },
      },
    ],
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
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
});
