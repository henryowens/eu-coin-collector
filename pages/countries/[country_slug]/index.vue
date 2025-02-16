<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { Slash } from "lucide-vue-next";

import queries from "~/queries";

const route = useRoute();

const countrySlug = computed(() =>
  route.params.country_slug?.toString().toLocaleLowerCase(),
);

const { data: country } = useQuery({
  ...queries.countries.byNormalisedName(countrySlug),
  enabled: !!countrySlug.value,
});
</script>

<template>
  <div class="max-w-2xl mx-auto py-4 sm:py-8">
    <div v-if="country">
      <Breadcrumb class="mb-4 sm:mb-6">
        <BreadcrumbList>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink :to="`/countries/${country.normalised_name}`">
              {{ country.name }}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div
        class="flex items-center space-x-6 p-5 rounded-t-3xl"
        :style="{
          backgroundColor: country.background_color,
        }"
      >
        <Icon
          :name="`flag:${country.locale}-1x1`"
          class="w-[50px] h-[50px] rounded-full"
        />
        <h1
          class="text-2xl tracking-wider font-bold text-masala-950"
          :class="
            country.text_color === 'light'
              ? 'text-masala-50'
              : 'text-masala-900'
          "
        >
          {{ country.name }}
        </h1>
      </div>
      <div class="flex flex-col">
        <CoinSet
          v-for="(set, setIndex) in country.coin_sets"
          :key="setIndex"
          :set="set"
          :country="country"
        />
      </div>
    </div>
  </div>
</template>
