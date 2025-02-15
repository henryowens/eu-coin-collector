<script setup lang="ts">
import type { ContextMenuRootEmits, ContextMenuRootProps } from "radix-vue";
import { ContextMenuRoot, useForwardPropsEmits } from "radix-vue";

const props = defineProps<ContextMenuRootProps>();
const emit = defineEmits<ContextMenuRootEmits>();

const forwarded = useForwardPropsEmits(props, emit);
</script>

<template>
  <ContextMenuRoot v-bind="forwarded">
    <slot />
  </ContextMenuRoot>
</template>
