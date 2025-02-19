import { defineVitestConfig } from "@nuxt/test-utils/config";

export default defineVitestConfig({
  test: {
    environment: "nuxt",
    coverage: {
      include: [
        "components/**/*.vue",
        "pages/**/*.vue",
        "plugins/**/*.ts",
        "service/**/*.ts",
        "middleware/**/*.ts",
        "layouts/**/*.vue",
        "composables/**/*.ts",
        "utils/**/*.ts",
      ],
      exclude: ["components/ui/**/*.vue"],
    },
    setupFiles: "./test.setup.ts",
  },
});
