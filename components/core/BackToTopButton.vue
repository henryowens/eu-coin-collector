<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";

const { y } = useWindowScroll();
</script>

<template>
  <div class="back__to__top__btn">
    <Icon
      name="ion:chevron-up-circle-outline"
      @click="() => (y = 0)"
    />
  </div>
</template>

<style scoped lang="scss">
.back__to__top__btn {
  @apply fixed;
  @apply bottom-0 right-0;
  @apply bg-gray-800;
  @apply text-white;
  @apply p-4 sm:p-2 sm:pr-4;
  @apply rounded-tl-lg;
  @apply cursor-pointer;
  svg {
    @apply w-8 h-8 sm:w-6 sm:h-6;
  }
}
</style>
