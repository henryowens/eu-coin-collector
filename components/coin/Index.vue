<script setup lang="ts">
import { ContentLoader } from "vue-content-loader";

import type { Coin, SelectedCoins } from "~/models/coins";
import type { CoinSet, Country } from "~/models/countries";

const props = defineProps<{
  coin: Coin;
  set: CoinSet;
}>();

const country = inject<Country>("country");

const selectedCoins = inject<Ref<SelectedCoins>>("selectedCoins");

const isLoading = ref(true);

const imageUrl = computed(
  () =>
    `/assets/coins/${country?.normalizedName.toLowerCase()}/${props.set.title ? `${props.set.title.toLowerCase().replaceAll(" ", "_")}-` : ""}${props.coin.name.toLowerCase().replaceAll(" ", "_")}.png`,
);

const isSelected = computed(
  () =>
    !!selectedCoins?.value.find(
      ({
        id: selectedId,
        coinSetId: selectedCoinSetId,
        value: selectedValue,
      }) =>
        selectedId === country?.id &&
        selectedCoinSetId === props.set.id &&
        selectedValue === props.coin.value,
    ),
);
</script>

<template>
  <button
    class="coin"
    :aria-label="`Select ${props.coin.value} coin from ${country?.name}`"
    :class="{
      'coin-selected': isSelected,
    }"
  >
    <img
      :src="imageUrl"
      :alt="`Image of a ${coin.value} coin from ${country?.name}`"
      width="90"
      height="90"
      @load="() => (isLoading = false)"
    />
    <Transition name="fade">
      <ContentLoader
        v-if="isLoading"
        width="75"
        height="75"
        class="coin--loader"
      />
    </Transition>
  </button>
</template>

<style scoped lang="scss">
.coin {
  @apply cursor-pointer;
  @apply h-[90px] w-[90px];
  @apply flex items-center justify-center;
  @apply relative;
  @apply p-0;
  @apply bg-transparent;

  &--loader {
    @apply absolute;
    @apply rounded-full;
  }

  img {
    @apply h-[75px] w-[75px];
    @apply rounded-full;
    @apply outline;
    @apply outline-4;
    @apply outline-gray-200;
    @apply transition-all;
  }
  &:hover {
    img {
      @apply outline-8;
    }
  }
}
.coin-selected {
  img {
    @apply transition-all;
    @apply outline-green-600;
  }
}
</style>
