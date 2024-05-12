import type { ModuleOptions } from "nuxt-gtag";

export default {
  id: "G-JTHBRL290P",
  initCommands: [
    [
      "consent",
      "default",
      {
        ad_user_data: "denied",
        ad_personalization: "denied",
        ad_storage: "denied",
        analytics_storage: "denied",
        wait_for_update: 500,
      },
    ],
  ],
} satisfies Partial<ModuleOptions>;
