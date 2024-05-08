<script setup lang="ts">
defineProps<{
  icon: string;
  title: string;
  showClearButton: boolean;
}>();

defineEmits<{
  (e: "clear"): void;
}>();

const isCollapsed = defineModel<boolean>({
  default: true,
});
</script>

<template>
  <div class="filters__section">
    <div class="filters__section--header">
      <div class="filters__section--header--title">
        <Icon :name="icon" />
        <h2>{{ title }}</h2>
      </div>

      <div class="filters__section--header--options">
        <Transition name="fade">
          <button
            v-if="showClearButton"
            class="btn__xs"
            @click="$emit('clear')"
          >
            Clear
          </button>
        </Transition>

        <div
          class="filters__section--header--options--collapse__button"
          @click="() => (isCollapsed = !isCollapsed)"
        >
          <Transition
            name="fade"
            mode="out-in"
            :delay="100"
          >
            <Icon
              v-if="isCollapsed"
              key="chevron-down"
              name="ion:chevron-down-outline"
            />
            <Icon
              v-else
              key="chevron-up"
              name="ion:chevron-up-outline"
            />
          </Transition>
        </div>
      </div>
    </div>
    <Transition name="grow">
      <div
        v-if="!isCollapsed"
        class="filters__section--flag__container"
      >
        <div class="mt-6">
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.filters__section {
  @apply p-4;
  @apply px-6;
  @apply rounded-lg;
  @apply bg-slate-100;
  @apply w-full;
  &--header {
    @apply flex justify-between items-center;
    &--title {
      @apply flex gap-1.5 items-center;
      @apply py-1;
      @apply text-gray-600;
      @apply font-bold;
      h2 {
        @apply text-xs;
        @apply uppercase;
      }
    }
    &--options {
      @apply flex gap-4;
      &--collapse__button {
        @apply flex items-center;
        @apply cursor-pointer;
      }
    }
  }
  &--flag__container {
    @apply h-full;
    @apply overflow-hidden;
  }
}

.grow-enter-active {
  transition: all 0.5s ease-in;
  max-height: 0;
}
.grow-leave-active {
  transition: all 0.5s ease-out;
  max-height: 400px;
}

.grow-enter,
.grow-leave-to {
  max-height: 0;
}

.grow-enter-to,
.grow-leave {
  max-height: 400px;
}
</style>
