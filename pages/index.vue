<script setup lang="ts">
import { useSelectCoin } from "~/queries/selectedCoins";

const { data: countries, suspense } = useCountries();

onServerPrefetch(async () => await suspense());

const user = useSupabaseUser();
const isAuthDialogOpen = ref(false);

const { mutateAsync: selectCoin } = useSelectCoin();

const onCoinSelect = async (coinId: string) => {
  if (!user.value) isAuthDialogOpen.value = true;

  await selectCoin(coinId);
};

const { data: selectedCoinsData } = useRealtimeSelectedCoins();

const filterSelected = ref<"all" | "selected" | "unselected">();

// I want to make this function again but if the coin set if empty then dont show it and then if all coin sets are empty then dont show the country
const getSelectedCoins = (selected: boolean) =>
  countries.value
    ?.map((country) => {
      const countryCopy = { ...country };

      countryCopy.coin_sets = countryCopy.coin_sets.map((set) => {
        const setCopy = { ...set };

        const selectedIds = selectedCoinsData.value?.map(
          ({ coin_id: coinId }) => coinId,
        );

        setCopy.coins = setCopy.coins.filter((coin) =>
          selected
            ? selectedIds?.includes(coin.id)
            : !selectedIds?.includes(coin.id),
        );

        return setCopy;
      });

      return countryCopy;
    })
    .map((country) => {
      const countryCopy = { ...country };

      countryCopy.coin_sets = countryCopy.coin_sets.filter(
        (set) => set.coins.length > 0,
      );

      return countryCopy;
    })
    .filter((country) => country.coin_sets.length > 0);

const countriesToDisplay = computed(() => {
  if (!selectedCoinsData.value) return countries.value;

  switch (filterSelected.value) {
    case "selected":
      return getSelectedCoins(true);
    case "unselected":
      return getSelectedCoins(false);
    default:
      return countries.value;
  }
});
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
    <div class="filters">
      <h2 class="text-base text-masala-800 mb-2 flex items-center">
        <Icon
          name="ion:funnel"
          class="mr-2"
        />
        Filters
      </h2>
      <div class="flex items-center gap-4">
        <Select v-model="filterSelected">
          <SelectTrigger>
            <SelectValue placeholder="Filter on selected coins" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="selected">Selected</SelectItem>
              <SelectItem value="unselected">Not Selected</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button @click="filterSelected = undefined">Clear</Button>
      </div>
    </div>
    <hr />
    <div class="transition-all duration-500 ease-in-out">
      <div
        v-for="(country, countryIndex) in countriesToDisplay"
        :id="country.normalised_name"
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
              <span
                v-for="(coin, coinIndex) in set.coins"
                :key="coinIndex"
              >
                <Coin
                  v-model:filter-selected="filterSelected"
                  :coin="coin"
                  :set="set"
                  :country="country"
                  @coin-selected="() => onCoinSelect(coin.id)"
                />
              </span>
            </div>
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
        @apply relative;
        @apply flex flex-col gap-2;
        > h3 {
          font-family: "Urbanist", sans-serif;
          @apply italic font-extrabold;
          @apply text-sm;
          @apply tracking-widest;
          @apply text-masala-500;
          @apply px-5;
        }
        &::after,
        &::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 8%; /* Adjust to control the width of the blurry overlay */
          z-index: 1;
        }
        &::before {
          left: 0;
          right: auto;
          background: linear-gradient(90deg, #f0f0f0, transparent);
        }
        &::after {
          right: 0;
          left: auto;
          background: linear-gradient(90deg, transparent, #f0f0f0);
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
