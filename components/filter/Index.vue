<script setup lang="ts">
const filterSelectedCountries = useFilterSelectedCountries();
const filterSelectedCoins = useFilterSelectedCoins();

const {
  data: countries,
  suspense: suspenseCountries,
  isFetching: isCountriesFetching,
} = useCountries();
const {
  data: coins,
  suspense: suspenseCoins,
  isFetching: isCoinsFetching,
} = useCoins();

onServerPrefetch(
  async () => await Promise.all([suspenseCountries(), suspenseCoins()]),
);

const onCountryClicked = (id: number) => {
  const index = filterSelectedCountries.value.findIndex(
    (selectedId) => selectedId === id,
  );

  if (index === -1) filterSelectedCountries.value.push(id);
  else filterSelectedCountries.value.splice(index, 1);
};

const onCoinClicked = (id: number) => {
  const index = filterSelectedCoins.value.findIndex(
    (selectedId) => selectedId === id,
  );

  if (index === -1) filterSelectedCoins.value.push(id);
  else filterSelectedCoins.value.splice(index, 1);
};
</script>

<template>
  <div class="filters">
    <h2 class="heading__sm">Filters</h2>
    <FilterSection
      icon="ion:earth-outline"
      title="Countries"
      :show-clear-button="filterSelectedCountries.length > 0"
      :is-loading="isCountriesFetching"
      @clear="filterSelectedCountries = []"
    >
      <div class="filters--countries__content">
        <p
          v-for="({ flag, id }, index) in countries"
          :key="index"
          class="filters--countries__content--country"
          :class="
            filterSelectedCountries.includes(id)
              ? 'bg-gray-300'
              : 'bg-transparent'
          "
          @click="() => onCountryClicked(id)"
        >
          {{ flag }}
        </p>
      </div>
    </FilterSection>

    <FilterSection
      icon="ion:logo-euro"
      title="Coins"
      :show-clear-button="filterSelectedCoins.length > 0"
      :is-loading="isCoinsFetching"
      @clear="filterSelectedCoins = []"
    >
      <div class="filters--countries__content">
        <div
          v-for="({ image, value, name }, index) in coins"
          :key="index"
          class="filters--countries__content--coin"
          :class="
            filterSelectedCoins.includes(value)
              ? 'bg-gray-300'
              : 'bg-transparent'
          "
          @click="() => onCoinClicked(value)"
        >
          <img
            :src="image"
            :alt="`Image of ${name} coin`"
          />
        </div>
      </div>
    </FilterSection>
  </div>
</template>

<style lang="scss" scoped>
.filters {
  @apply max-w-[950px];
  @apply m-auto;
  @apply w-full;
  @apply flex flex-col gap-2;
  &--countries__content {
    @apply flex;
    @apply gap-1;
    @apply flex-wrap;
    @apply sm:justify-center justify-around;
    &--country {
      @apply text-6xl sm:text-4xl;
      @apply text-black;
      @apply cursor-pointer;
      @apply px-2;
      @apply rounded-sm;
      @apply transition-all;
      &:hover {
        @apply bg-gray-300;
        @apply transition-all;
      }
    }
    &--coin {
      @apply cursor-pointer;
      @apply p-2;
      @apply rounded-sm;
      @apply transition-all;
      img {
        @apply w-12 h-12;
        @apply rounded-full;
      }
      &:hover {
        @apply bg-gray-300;
        @apply transition-all;
      }
    }
  }
}
</style>
