<script setup lang="ts">
import type { ContextMenuSubEmits, ContextMenuSubProps } from "radix-vue";
import { ContextMenuSub, useForwardPropsEmits } from "radix-vue";

const props = defineProps<ContextMenuSubProps>();
const emit = defineEmits<ContextMenuSubEmits>();

const forwarded = useForwardPropsEmits(props, emit);
</script>

<template>
  <ContextMenuSub v-bind="forwarded">
    <slot />
  </ContextMenuSub>
</template>
