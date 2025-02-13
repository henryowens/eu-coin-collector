import type { ModuleOptions } from "@nuxtjs/supabase";

export default {
  redirect: false,
  cookieOptions: {
    maxAge: 60 * 60 * 8,
    sameSite: "lax",
    secure: true,
  },
  url: "https://ytavscywezkcabzofwnc.supabase.co",
  key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0YXZzY3l3ZXprY2Fiem9md25jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyNTA4NDMsImV4cCI6MjA1MzgyNjg0M30.uBcbJ673nSvzkKEL60_YU6c-FcwdnpiGPNtl5VFnpLQ",
  clientOptions: {
    auth: {
      flowType: "implicit",
      persistSession: true,
      autoRefreshToken: true,
    },
  },
} satisfies Partial<ModuleOptions>;
