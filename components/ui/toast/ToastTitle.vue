<script setup lang="ts">
import { ToastTitle, type ToastTitleProps } from "radix-vue";
import { type HTMLAttributes } from "vue";

import { cn } from "@/lib/utils";

const props = defineProps<
  ToastTitleProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = useOmit(props, ["class"]);
</script>

<template>
  <ToastTitle
    v-bind="delegatedProps"
    :class="cn('text-sm font-semibold', props.class)"
  >
    <slot />
  </ToastTitle>
</template>
