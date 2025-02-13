<script setup lang="ts">
import { ToastDescription, type ToastDescriptionProps } from "radix-vue";
import { type HTMLAttributes } from "vue";

import { cn } from "@/lib/utils";

const props = defineProps<
  ToastDescriptionProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = useOmit(props, ["class"]);
</script>

<template>
  <ToastDescription
    :class="cn('text-sm opacity-90', props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </ToastDescription>
</template>
