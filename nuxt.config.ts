export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/main.scss"],
  modules: ["@nuxtjs/eslint-module", "nuxt-icon"],
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
});
