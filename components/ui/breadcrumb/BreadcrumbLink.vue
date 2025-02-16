<script lang="ts" setup>
import type { PrimitiveProps } from "radix-vue";
import type { HTMLAttributes } from "vue";

import { cn } from "@/lib/utils";

const props = withDefaults(
  defineProps<PrimitiveProps & { class?: HTMLAttributes["class"] }>(),
  {
    class: "",
  },
);
</script>

<template>
  <NuxtLink
    :as-child="asChild"
    :class="cn('transition-colors hover:text-foreground', props.class)"
  >
    <slot />
  </NuxtLink>
</template>

<style scoped lang="scss">
.router-link-exact-active {
  @apply text-foreground;
}
</style>
