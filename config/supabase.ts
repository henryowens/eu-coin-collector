import type { ModuleOptions } from "@nuxtjs/supabase";

export default {
  redirect: false,
  cookieOptions: {
    maxAge: 60 * 60 * 8,
    sameSite: "lax",
    secure: true,
  },
  url: "https://ytavscywezkcabzofwnc.supabase.co",
  key: process.env.NEXT_PUBLIC_SUPABASE_KEY,
  clientOptions: {
    auth: {
      flowType: "implicit",
      persistSession: true,
      autoRefreshToken: true,
    },
  },
} satisfies Partial<ModuleOptions>;
