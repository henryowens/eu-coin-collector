<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";

const { y } = useWindowScroll();
</script>

<template>
  <Icon
    name="ion:ios-arrow-dropup-circle"
    size="65"
    color="#2563eb"
    fill="white"
    @click="() => (y = 0)"
  />
</template>

<style scoped lang="scss">
svg {
  @apply fixed bottom-6 right-6;
  @apply cursor-pointer;
}
</style>
