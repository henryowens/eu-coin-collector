<script setup lang="ts">
import { useSelectCoin } from "~/queries/selectedCoins";

const { data: countries, suspense } = useCountries();

onServerPrefetch(async () => await suspense());

const filteredCountries = computed(() => countries.value);

const user = useSupabaseUser();
const isAuthDialogOpen = ref(false);

const { mutateAsync: selectCoin } = useSelectCoin();

const onCoinSelect = async (coinId: string) => {
  if (!user.value) isAuthDialogOpen.value = true;

  await selectCoin(coinId);
};
</script>

<template>
  <div class="home__page">
    <AuthDialog v-model="isAuthDialogOpen" />
    <div class="flex flex-col w-fit">
      <h1
        class="text-3xl font-extrabold tracking-widest sm:racking-[8px] text-masala-900 pb-2"
      >
        Coin Selector Portal
      </h1>
      <p
        class="text-sm font-extrabold tracking-wider sm:tracking-[4px] text-masala-500 pb-4"
      >
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
          backgroundColor: country.background_color,
        }"
      >
        <Icon
          :name="`flag:${country.locale}-1x1`"
          class="w-[30px] h-[30px] rounded-full"
        />
        <h2
          :class="
            country.text_color === 'light'
              ? 'text-masala-50'
              : 'text-masala-900'
          "
        >
          {{ country.name }}
        </h2>
      </div>

      <div class="home__page--country__container--coins__set__container">
        <div
          v-for="(set, setIndex) in country.coin_sets"
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
              @coin-selected="() => onCoinSelect(coin.id)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
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
      @apply flex flex-col gap-3 pb-5;
      &--coin__set {
        @apply flex flex-col gap-2;
        > h3 {
          font-family: "Urbanist", sans-serif;
          @apply italic font-extrabold;
          @apply text-sm;
          @apply tracking-widest;
          @apply text-masala-500;
          @apply px-5;
        }
        &--coins {
          @apply overflow-x-scroll px-5;
          @apply gap-4 py-5;
          display: grid;
          grid-auto-flow: column;
          justify-content: start;
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
