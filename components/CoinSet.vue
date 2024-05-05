<script setup lang="ts">
import type { Coin } from "~/models/coins";
import type { CoinSet } from "~/models/countries";

defineProps<CoinSet>();
defineEmits<{
  (e: "click", coin: Coin): void;
}>();
</script>

<template>
  <div>
    <h3 v-if="title">{{ title }}</h3>
    <div class="coin__set">
      <Coin
        v-for="(coin, index) in coins"
        :key="index"
        :coin="coin"
        :set="$props"
        @click="() => $emit('click', coin)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.coin__set {
  @apply flex;
  @apply flex-wrap;
}

h3 {
  @apply text-sm;
  @apply font-bold;
  @apply text-gray-700;
}
</style>
