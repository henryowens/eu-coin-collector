<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { Slash } from "lucide-vue-next";

import queries from "~/queries";

const route = useRoute();

const countrySlug = computed(() =>
  route.params.country_slug?.toString().toLocaleLowerCase(),
);

const { data: country, isLoading: isCountryLoading } = useQuery({
  ...queries.countries.byNormalisedName(countrySlug),
  enabled: !!countrySlug.value,
});

const showSkeleton = computed(() => !country.value || isCountryLoading.value);
</script>

<template>
  <div class="max-w-2xl mx-auto p-4 sm:py-8">
    <div>
      <TransitionFadeBetween>
        <Skeleton
          v-if="showSkeleton"
          class="w-[100px] h-5 mb-4 sm:mb-6"
        />
        <Breadcrumb
          v-else
          class="mb-4 sm:mb-6"
        >
          <BreadcrumbList>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink :to="`/countries/${country?.normalised_name}`">
                {{ country?.name }}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </TransitionFadeBetween>

      <TransitionFadeBetween>
        <div
          v-if="showSkeleton"
          class="flex items-center space-x-6 p-5 rounded-t-3xl bg-gray-300/50"
        >
          <Skeleton class="w-[50px] h-[50px] rounded-full" />
          <Skeleton class="w-[100px] h-[32px] rounded-full" />
        </div>
        <div
          v-else
          class="flex items-center space-x-6 p-5 rounded-t-3xl"
          :style="{
            backgroundColor: country?.background_color,
          }"
        >
          <Icon
            :name="`flag:${country?.locale}-1x1`"
            class="w-[50px] h-[50px] rounded-full"
          />
          <h1
            class="text-2xl tracking-wider font-bold"
            :class="
              country?.text_color === 'light'
                ? 'text-masala-50'
                : 'text-masala-900'
            "
          >
            {{ country?.name }}
          </h1>
        </div>
      </TransitionFadeBetween>

      <TransitionFadeBetween>
        <Skeleton
          v-if="showSkeleton"
          class="w-full h-[140px]"
        />
        <div
          v-else-if="country"
          class="flex flex-col"
        >
          <CoinSet
            v-for="(set, setIndex) in country?.coin_sets"
            :key="setIndex"
            :set="set"
            :country="country"
          />
        </div>
      </TransitionFadeBetween>
    </div>
  </div>
</template>
