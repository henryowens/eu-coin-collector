export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/main.scss"],
  components: ["~/components", "~/components/core"],
  modules: [
    "@nuxtjs/eslint-module",
    "nuxt-icon",
    [
      "@nuxt/image",
      {
        provider: "netlify",
      },
    ],
  ],
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
