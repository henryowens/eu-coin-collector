import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        woodsmoke: {
          "50": "#f5f6f6",
          "100": "#e5e7e8",
          "200": "#cdd0d4",
          "300": "#abb0b5",
          "400": "#81888f",
          "500": "#666d74",
          "600": "#575c63",
          "700": "#4a4e54",
          "800": "#424548",
          "900": "#3a3c3f",
          "950": "#191a1c",
        },
        "fuscous-gray": {
          "50": "#f6f6f6",
          "100": "#e7e7e7",
          "200": "#d1d1d1",
          "300": "#b0b0b0",
          "400": "#888888",
          "500": "#6d6d6d",
          "600": "#5d5d5d",
          "700": "#505050",
          "800": "#454545",
          "900": "#3d3d3d",
          "950": "#262626",
        },
        "right-blue": {
          "50": "#ebf9ff",
          "100": "#d1f2ff",
          "200": "#aee9ff",
          "300": "#76deff",
          "400": "#35c9ff",
          "500": "#07a6ff",
          "600": "#0080ff",
          "700": "#0067ff",
          "800": "#0055d7",
          "900": "#0052b4",
          "950": "#062f65",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
