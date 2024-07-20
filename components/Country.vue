<script setup lang="ts">
import type { Coin } from "~/models/coins";
import type { CoinSet, Country } from "~/models/countries";

const props = defineProps<Country>();
defineEmits<{
  (e: "coin-clicked", event: { coin: Coin; set: CoinSet }): void;
}>();

provide("country", props);

const isCollapsed = ref(false);
</script>

<template>
  <div
    class="country"
    :class="{
      collapsed: isCollapsed,
    }"
  >
    <div class="country--title">
      <h2>{{ name }} {{ flag }}</h2>

      <span @click="isCollapsed = !isCollapsed">
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
      </span>
    </div>

    <Transition name="grow">
      <div
        v-if="!isCollapsed"
        class="country--coin__sets__container"
      >
        <CoinSet
          v-for="(set, index) in coinSet"
          :key="index"
          v-bind="set"
          @click="$emit('coin-clicked', { coin: $event, set })"
        />
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.country {
  @apply p-6;
  height: auto;
  overflow: hidden;
  &--title {
    @apply flex justify-between items-center;
    h2 {
      @apply text-xl;
      @apply text-gray-800;
    }

    svg {
      @apply cursor-pointer;
      @apply text-gray-500;
    }
  }

  &--coin__sets__container {
    @apply mt-4;
    @apply flex flex-col;
    @apply gap-6;
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
