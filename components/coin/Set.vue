<script setup lang="ts">
import type { Coin } from "~/models/coins";
import type { CoinSet } from "~/models/countries";

const props = defineProps<CoinSet>();
defineEmits<{
  (e: "click", coin: Coin): void;
}>();

const filterSelectedCoins = useFilterSelectedCoins();

const filteredCoins = computed(() =>
  !filterSelectedCoins.value.length
    ? props.coins
    : props.coins.filter(({ value }) =>
        filterSelectedCoins.value.includes(value),
      ),
);
</script>

<template>
  <div
    v-if="filteredCoins.length"
    class="coin__set"
  >
    <h2
      v-if="title"
      class="coin__set--title"
    >
      {{ title }}
    </h2>

    <TransitionGroup
      name="fade"
      tag="div"
      class="coin__set--coins"
    >
      <Coin
        v-for="(coin, index) in filteredCoins"
        :key="index"
        :coin="coin"
        :set="$props"
        @click="() => $emit('click', coin)"
      />
    </TransitionGroup>
  </div>
</template>

<style scoped lang="scss">
.coin__set {
  &--title {
    @apply text-sm;
    @apply font-bold;
    @apply text-gray-700;
    @apply px-2;
  }
  &--coins {
    @apply flex;
    @apply flex-wrap;
    @apply items-center;
    @apply sm:justify-center justify-around;
    @apply sm:gap-0 gap-3;
  }
}
</style>
