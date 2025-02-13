<script setup lang="ts">
import type { HTMLAttributes } from "vue";

import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div :class="cn('mb-4 flex flex-col gap-y-1.5 text-left h-fit', props.class)">
    <slot />
  </div>
</template>
