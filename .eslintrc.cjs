module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "./shared.eslintrc.cjs",
    "./vue.eslintrc.cjs",
  ],
  ignorePatterns: ["lib"],
  overrides: [
    {
      files: ["pages/**", "storyblok/**"],
      rules: {
        "vue/multi-word-component-names": "off",
      },
    },
    {
      files: ["components/**"],
      rules: { "vue/require-toggle-inside-transition": "off" },
    },
  ],
};
