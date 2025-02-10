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
const session = useSupabaseSession();
const user = useSupabaseUser();

watch(user, (newUser) => {
  if (newUser)
    toast({
      title: "Welcome back!",
      description: "You have successfully signed in.",
    });
  else toast({ title: "Goodbye!", description: "You have signed out." });
});
</script>

<template>
  <NuxtLayout>
    <p>
      blahh
      {{ user }}
      {{ session }}
    </p>
    <Toaster />
    <NuxtPage />
    <CookieConsent />
  </NuxtLayout>
</template>
