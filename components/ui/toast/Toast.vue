<script setup lang="ts">
import {
  ToastRoot,
  type ToastRootEmits,
  useForwardPropsEmits,
} from "radix-vue";
import { computed } from "vue";

import { cn } from "@/lib/utils";

import { type ToastProps, toastVariants } from ".";

const props = defineProps<ToastProps>();

const emit = defineEmits<ToastRootEmits>();

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emit);
</script>

<template>
  <ToastRoot
    v-bind="forwarded"
    :class="cn(toastVariants({ variant }), props.class)"
    @update:open="onOpenChange"
  >
    <slot />
  </ToastRoot>
</template>
