<script setup lang="ts">
import type { Coin } from "~/models/coins";
import type { CoinSet, Country } from "~/models/countries";

const props = defineProps<Country>();
defineEmits<{
  (e: "coin-clicked", event: { coin: Coin; set: CoinSet }): void;
}>();

provide("country", props);
</script>

<template>
  <div class="country">
    <h2>{{ name }} {{ flag }}</h2>
    <div class="country--coin__sets__container">
      <CoinSet
        v-for="(set, index) in coinSet"
        :key="index"
        v-bind="set"
        @click="$emit('coin-clicked', { coin: $event, set })"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.country {
  @apply p-6;

  h2 {
    @apply text-xl;
    @apply text-gray-800;
    @apply mb-4;
  }

  &--coin__sets__container {
    @apply flex flex-col;
    @apply gap-6;
  }
}
</style>
