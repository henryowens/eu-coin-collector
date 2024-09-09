<script lang="ts" setup>
import { ContentLoader } from "vue-content-loader";

withDefaults(
  defineProps<{
    showTitle?: boolean;
    progress: number;
    isLoading?: boolean;
    showAmount?: boolean;
  }>(),
  {
    showTitle: true,
    showAmount: false,
  },
);
</script>

<template>
  <div
    class="progress__bar"
    :class="{
      '!m-0': !showTitle,
    }"
  >
    <h2
      v-if="showTitle"
      class="heading__sm"
    >
      Progress
    </h2>

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
          v-if="showAmount"
          class="progress__bar--bar--progress"
          :style="{ maxWidth: `${progress}%` }"
        >
          <p class="progress__bar--bar--progress__bubble">
            {{ Math.round(progress) }}%
          </p>
        </div>
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
  @apply mb-6;
  &--bar {
    @apply h-2;
    @apply bg-gray-200;
    @apply rounded-full;
    &--progress {
      @apply rounded-full;
      @apply h-full;
      @apply w-full;
      @apply transition-all;
      @apply bg-blue-500;
      @apply relative;
    }
    &--progress__bubble {
      @apply absolute;
      // width: 20px;
      // height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      top: -7px;
      left: calc(100% - 10px);
      @apply bg-blue-900;
      // @apply bg-opacity-60;
      @apply text-white;
      @apply rounded-full;
      @apply p-1;
      @apply text-[10px];
    }
  }
}
</style>
