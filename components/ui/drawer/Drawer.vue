<script lang="ts" setup>
import { useForwardPropsEmits } from "radix-vue";
import type { DrawerRootEmits, DrawerRootProps } from "vaul-vue";
import { DrawerRoot } from "vaul-vue";

const props = withDefaults(defineProps<DrawerRootProps>(), {
  shouldScaleBackground: true,
});

const emit = defineEmits<DrawerRootEmits>();

const forwarded = useForwardPropsEmits(props, emit);
</script>

<template>
  <DrawerRoot v-bind="forwarded">
    <slot />
  </DrawerRoot>
</template>
