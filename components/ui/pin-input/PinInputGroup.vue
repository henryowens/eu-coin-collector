<script setup lang="ts">
import { Primitive, type PrimitiveProps, useForwardProps } from "radix-vue";
import { type HTMLAttributes } from "vue";

import { cn } from "@/lib/utils";

const props = defineProps<
  PrimitiveProps & { class?: HTMLAttributes["class"] }
>();
const delegatedProps = useOmit(props, "class");
const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <Primitive
    v-bind="forwardedProps"
    :class="cn('flex items-center', props.class)"
  >
    <slot />
  </Primitive>
</template>
