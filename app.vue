<script setup lang="ts">
import { Toaster, useToast } from "@/components/ui/toast";

useHead({
  title: "🇪🇺 EU Coin Collector",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "A simple site to help you collect coins from the European Union.",
    },
    {
      hid: "google-site-verification",
      name: "google-site-verification",
      content: "dtf3kB19TG-gqTReca_GLtIYMOHARUqc-LjIHaA22Qk",
    },
  ],
  htmlAttrs: {
    lang: "en",
  },
});

const { toast } = useToast();
const user = useSupabaseUser();

watch(user, (newUser) => {
  if (!newUser)
    toast({ title: "Goodbye!", description: "You have signed out." });
});

const { isLocal, isAcceptance } = useAppEnv();
</script>

<template>
  <div
    v-if="isLocal || isAcceptance"
    class="p-4 flex items-center justify-center font-bold text-white tracking-wide"
    :class="{
      'bg-green-400': isLocal,
      'bg-orange-400': isAcceptance,
    }"
  >
    {{ isLocal ? "LOCAL" : "ACCEPTANCE" }} ENV
  </div>
  <NuxtLayout>
    <Toaster />
    <NuxtPage />
    <CookieConsent />
  </NuxtLayout>
</template>
