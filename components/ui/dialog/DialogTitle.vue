<script setup lang="ts">
import { DialogTitle, type DialogTitleProps, useForwardProps } from "radix-vue";
import { type HTMLAttributes } from "vue";

import { cn } from "@/lib/utils";

const props = defineProps<
  DialogTitleProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = useOmit(props, "class");

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <DialogTitle
    v-bind="forwardedProps"
    :class="
      cn('text-2xl mb-2 font-semibold leading-none tracking-tight', props.class)
    "
  >
    <slot />
  </DialogTitle>
</template>
