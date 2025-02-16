<script setup lang="ts">
import type {
  NavigationMenuRootEmits,
  NavigationMenuRootProps,
} from "radix-vue";
import { NavigationMenuRoot, useForwardPropsEmits } from "radix-vue";
import type { HTMLAttributes } from "vue";
import { computed } from "vue";

import { cn } from "@/lib/utils";

import NavigationMenuViewport from "./NavigationMenuViewport.vue";

const props = defineProps<
  NavigationMenuRootProps & { class?: HTMLAttributes["class"] }
>();

const emit = defineEmits<NavigationMenuRootEmits>();

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emit);
</script>

<template>
  <NavigationMenuRoot
    v-bind="forwarded"
    :class="
      cn(
        'sm:relative z-10 flex max-w-max flex-1 items-center justify-center',
        props.class,
      )
    "
  >
    <slot />
    <NavigationMenuViewport />
  </NavigationMenuRoot>
</template>
