import type { ModuleOptions } from "@nuxtjs/supabase";

export default {
  redirect: false,
  cookieOptions: {
    maxAge: 60 * 60 * 8,
    sameSite: "lax",
    secure: true,
  },
  clientOptions: {
    auth: {
      flowType: "implicit",
      persistSession: true,
      autoRefreshToken: true,
    },
  },
} satisfies Partial<ModuleOptions>;
