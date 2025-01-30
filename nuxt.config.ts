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
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Urbanist: [
            100,
            200,
            300,
            400,
            500,
            600,
            700,
            800,
            900,
          ],
        },
      },
    ],
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
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
});
