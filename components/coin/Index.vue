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
  <div
    class="coin"
    :class="{
      'coin-selected': isSelected,
    }"
  >
    <img
      :src="imageUrl"
      :alt="`Image of a ${coin.value} coin from ${country?.name}`"
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
  </div>
</template>

<style scoped lang="scss">
.coin {
  @apply cursor-pointer;
  @apply sm:h-[100px] sm:w-[100px] h-[110px] w-[110px];
  @apply flex items-center justify-center;
  @apply relative;
  &--loader {
    @apply absolute;
    @apply rounded-full;
  }

  img {
    @apply sm:w-[75px] sm:h-[75px] h-[95px] w-[95px];
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
  filter: brightness(0.75);
}
.coin-selected {
  img {
    @apply transition-all;

    @apply outline-green-600;
  }
  filter: brightness(1);
}
</style>
