<script setup lang="ts">
useHead({
  title: "🇪🇺 EU Coin Collector",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "A simple site to help you collect coins from the European Union.",
    },
  ],
  htmlAttrs: {
    lang: "en",
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
