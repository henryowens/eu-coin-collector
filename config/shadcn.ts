import type { ModuleOptions } from "shadcn-nuxt";

export default {
  /**
   * Prefix for all the imported component
   */
  prefix: "",
  /**
   * Directory that the component lives in.
   * @default "./components/ui"
   */
  componentDir: "./components/ui",
} satisfies Partial<ModuleOptions>;
