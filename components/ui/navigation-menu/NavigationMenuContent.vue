<script setup lang="ts">
import type {
  NavigationMenuContentEmits,
  NavigationMenuContentProps,
} from "radix-vue";
import { NavigationMenuContent, useForwardPropsEmits } from "radix-vue";
import type { HTMLAttributes } from "vue";
import { computed } from "vue";

import { cn } from "@/lib/utils";

const props = defineProps<
  NavigationMenuContentProps & { class?: HTMLAttributes["class"] }
>();

const emit = defineEmits<NavigationMenuContentEmits>();

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emit);
</script>

<template>
  <NavigationMenuContent
    v-bind="forwarded"
    :class="
      cn(
        'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto',
        props.class,
      )
    "
  >
    <slot />
  </NavigationMenuContent>
</template>
