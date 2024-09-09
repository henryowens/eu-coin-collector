<script setup lang="ts">
import { useConfirmDialog } from "@vueuse/core";

defineProps<{
  name: string;
}>();

defineSlots<{
  header: {};
  body: {};
  footer: {};
}>();

const dialog = ref<HTMLDialogElement | null>(null);
</script>

<template>
  <dialog
    :id="name"
    ref="dialog"
    popover
  >
    <div class="content">
      <div class="content--header">
        <slot name="header" />
      </div>
      <div class="content--body">
        <slot name="body" />
      </div>
      <div class="content--footer">
        <slot name="footer" />
      </div>
    </div>
  </dialog>
</template>

<style lang="scss" scoped>
dialog {
  @apply bg-transparent;
  @apply w-auto sm:max-w-xl;
  box-shadow: 0 0 0.5rem 100vw rgba(0, 0, 0, 0.2); /* updated */
  transition: 2s ease-out;
  overflow: auto;
  overscroll-behavior: contain;
  @apply m-2 my-auto;
  .content {
    overscroll-behavior: contain;
    @apply bg-white;
    @apply p-4;
    @apply rounded-lg;
    @apply flex flex-col gap-4 justify-between;
    &--footer {
      @apply flex-col sm:flex-row flex justify-between gap-2;
    }
  }
  &::backdrop {
    overflow: auto;
    overscroll-behavior: contain;
    @apply bg-black bg-opacity-50;
  }
}

dialog {
  transition: overlay 0.3s allow-discrete;

  animation: open 0.3s forwards;
  &[open] {
    // animation: close 0.3s forwards;
  }
}
@keyframes open {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes close {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
