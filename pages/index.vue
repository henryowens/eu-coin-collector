<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";

import type { Coin } from "~/models/coins";
import type { CoinSet, Country } from "~/models/countries";

const { data: countries, suspense } = useCountries();

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
  <div class="home__page">
    <div class="flex flex-col w-fit">
      <h1 class="text-3xl font-extrabold tracking-[8px] text-masala-900 pb-2">
        Coin Selector Portal
      </h1>
      <p class="text-sm font-extrabold tracking-[4px] text-masala-500 pb-4">
        Here you can keep track of your coin collection.
      </p>
      <div class="h-[6px] rounded-[10px] w-full bg-masala-100" />
    </div>
    <div
      v-for="(country, countryIndex) in filteredCountries"
      :key="countryIndex"
      class="home__page--country__container"
    >
      <div
        class="home__page--country__container--header"
        :style="{
          backgroundColor: country.colorScheme.background,
        }"
      >
        <Icon
          :name="`flag:${country.locale}-1x1`"
          class="w-[30px] h-[30px] rounded-full"
        />
        <h2
          :class="
            country.colorScheme.backgroundText === 'light'
              ? 'text-masala-50'
              : 'text-masala-900'
          "
        >
          {{ country.name }}
        </h2>
      </div>

      <div class="home__page--country__container--coins__set__container">
        <div
          v-for="(set, setIndex) in country.coinSet"
          :key="setIndex"
          class="home__page--country__container--coins__set__container--coin__set"
        >
          <h3 v-if="set.title">{{ set.title }}</h3>
          <div
            class="home__page--country__container--coins__set__container--coin__set--coins"
          >
            <Coin
              v-for="(coin, coinIndex) in set.coins"
              :key="coinIndex"
              :coin="coin"
              :set="set"
              :country="country"
              @click="onCoinClicked(coin, set, country)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="index__page">
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
  </div> -->
</template>

<style scoped lang="scss">
.home__page {
  @apply max-w-[855px] m-auto p-5 flex flex-col gap-4;
  &--country__container {
    @apply bg-picton-blue-100 rounded-3xl border;
    background-color: #f0f0f0;
    &--header {
      @apply flex items-center gap-2 p-5 rounded-t-3xl mb-5;
      > h2 {
        font-family: "Urbanist", sans-serif;
        @apply italic font-extrabold;
        @apply text-base;
        letter-spacing: 4px;
      }
    }
    &--coins__set__container {
      @apply flex flex-col gap-3 px-5 pb-5;
      &--coin__set {
        @apply flex flex-col gap-2;
        > h3 {
          font-family: "Urbanist", sans-serif;
          @apply italic font-extrabold;
          @apply text-sm;
          @apply tracking-widest;
          @apply text-masala-500;
        }
        &--coins {
          @apply flex gap-4;
          > img {
            @apply w-20 h-20;
          }
        }
      }
    }
  }
}

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
