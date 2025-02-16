<script lang="ts" setup>
import type { DialogOverlayProps } from "radix-vue";
import { DrawerOverlay } from "vaul-vue";
import { type HtmlHTMLAttributes } from "vue";

import { cn } from "@/lib/utils";

const props = defineProps<
  DialogOverlayProps & { class?: HtmlHTMLAttributes["class"] }
>();

const delegatedProps = useOmit(props, ["class"]);
</script>

<template>
  <DrawerOverlay
    v-bind="delegatedProps"
    :class="cn('fixed inset-0 z-50 bg-black/80', props.class)"
  />
</template>
