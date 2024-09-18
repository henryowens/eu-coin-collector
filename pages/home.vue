<script setup lang="ts">
definePageMeta({
  layout: "home",
});

const { selectedCoins } = useSelectedCoins();

provide("selectedCoins", selectedCoins);

const { data: countries } = useCountries();
</script>

<template>
  <main class="max-content-width pt-14 px-5 w-fit">
    <CountryScoll />

    <div
      v-if="countries"
      class="flex flex-col"
    >
      <div
        v-for="(country, countryIndex) in countries"
        :key="countryIndex"
      >
        <NewCountry v-bind="country" />
        <hr
          v-if="countryIndex !== countries.length - 1"
          class="my-9"
        />
      </div>
    </div>
  </main>
</template>
