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
</script>

<template>
  <!-- <NuxtLayout>
    <NuxtPage />
    <CookieConsent />
  </NuxtLayout> -->

  <TresCanvas
    clear-color="#82DBC5"
    shadows
    alpha
    class="!w-screen !h-screen"
  >
    <!-- <TresPerspectiveCamera :position="[13, 11, 11]" /> -->
    <TresCamera />
    <OrbitControls
      :auto-rotate="true"
      :auto-rotate-speed="0.5"
      :enable-rotate="false"
      :enable-zoom="false"
    />
    <Suspense>
      <Model />
    </Suspense>
    <!-- <TresLight /> -->
    <TresDirectionalLight
      :position="[-4, 8, 4]"
      :intensity="10"
    />
  </TresCanvas>
</template>
