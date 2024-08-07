<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";
import { ContentLoader } from "vue-content-loader";

import ProgressBar from "~/components/core/ProgressBar.vue";
import type { Coin } from "~/models/coins";
import type { CoinSet, Country } from "~/models/countries";

const { data: countries, isFetching, suspense } = useCountries();

onServerPrefetch(async () => await suspense());

const { selectedCoins } = useSelectedCoins();
const filterSelectedCountries = useFilterSelectedCountries();
const { track } = useTracking();

const onCoinClicked = (coin: Coin, set: CoinSet, country: Country) => {
  const id = country.id;
  const coinSetId = set.id;
  const value = coin.value;

  const index = selectedCoins.value.findIndex(
    ({ id: selectedId, coinSetId: selectedCoinSetId, value: selectedValue }) =>
      selectedId === id &&
      selectedCoinSetId === coinSetId &&
      selectedValue === value,
  );

  if (index === -1) {
    selectedCoins.value.push({ id, coinSetId, value });
    track(TrackEventNames.CoinSelected, {});
  } else {
    selectedCoins.value.splice(index, 1);
    track(TrackEventNames.CoinUnselected, {});
  }
};

const filteredCountries = computed(() =>
  !filterSelectedCountries.value.length
    ? countries.value
    : countries.value?.filter(({ id }) =>
        filterSelectedCountries.value.includes(id),
      ),
);

provide("selectedCoins", selectedCoins);

const { y } = useWindowScroll();

const totalCoins = computed(
  () =>
    countries.value?.reduce(
      (acc, country) =>
        acc +
        country.coinSet.reduce((acc, coinSet) => acc + coinSet.coins.length, 0),
      0,
    ) ?? 0,
);

const percentageCollected = computed(
  () => (selectedCoins.value.length / totalCoins.value) * 100,
);
</script>

<template>
  <div class="index__page">
    <div class="fade-in w-full">
      <BackToTopButton
        v-if="y > 250"
        class="fade-in"
      />
      <div class="flex flex-col gap-4">
        <ProgressBar
          :progress="percentageCollected"
          :is-loading="isFetching"
        />
        <Filter />
      </div>

      <Transition
        name="fade"
        class="index__page--countries__container"
        mode="out-in"
      >
        <div
          v-if="isFetching"
          class="overflow-hidden m-auto max-w-[950px]"
        >
          <div
            v-for="i in 3"
            :key="i"
            class="country__loader p-6"
          >
            <ContentLoader
              :width="90"
              :height="28"
              class="mb-4"
            />
            <ContentLoader
              width="100%"
              :height="132"
              class="mb-4"
            />
          </div>
        </div>

        <TransitionGroup
          v-else
          name="fade"
          tag="div"
        >
          <div
            v-for="(country, index) in filteredCountries"
            :key="index"
          >
            <Country
              v-bind="country"
              @coin-clicked="onCoinClicked($event.coin, $event.set, country)"
            />
            <hr v-if="index + 1 !== filterSelectedCountries.length" />
          </div>
        </TransitionGroup>
      </Transition>
    </div>
  </div>
</template>

<style scoped lang="scss">
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.index__page {
  @apply flex-1;
  @apply flex;
  @apply justify-center;
  hr {
    @apply border-gray-200;
  }

  p {
    @apply text-center;
  }
  &--countries__container {
    @apply m-auto;
    max-width: 950px;
  }
}

.fade-in {
  animation: fadeIn 500ms ease-in-out;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}

.fade-enter-to,
.fade-leave-to {
  transition: opacity 0.5s;
}
</style>
