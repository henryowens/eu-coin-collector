<script lang="ts" setup>
import { ContentLoader } from "vue-content-loader";

defineProps<{
  progress: number;
  isLoading?: boolean;
}>();
</script>

<template>
  <div class="progress__bar">
    <h3>Collected</h3>

    <Transition
      name="fade"
      mode="out-in"
      :delay="200"
    >
      <ContentLoader
        v-if="isLoading"
        :height="8"
        width="100%"
        class="progress__bar--loader"
      />
      <div
        v-else
        class="progress__bar--bar"
      >
        <div
          class="progress__bar--bar--progress"
          :style="{ maxWidth: `${progress}%` }"
        />
        <p class="progress__bar--bar--progress__bubble">
          {{ Math.round(progress) }}%
        </p>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.progress__bar {
  @apply max-w-[950px];
  @apply m-auto;
  @apply flex flex-col gap-2;
  @apply w-full;

  &--bar {
    @apply relative;
    @apply h-2;
    @apply bg-gray-200;
    @apply rounded-full;
    &--progress {
      @apply rounded-full;
      @apply h-full;
      @apply w-full;
      @apply transition-all;
      @apply bg-blue-500;
    }
    &--progress__bubble {
      @apply absolute;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      top: -11px;
      left: calc(50% - 15px);
      @apply bg-gray-800;
      @apply bg-opacity-60;
      @apply text-white;
      @apply rounded-full;
      @apply p-1;
      @apply text-xs;
    }
  }
}
</style>
