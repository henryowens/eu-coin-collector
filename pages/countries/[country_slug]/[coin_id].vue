<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { Slash } from "lucide-vue-next";

import queries from "~/queries";
import { useSelectCoin } from "~/queries/selectedCoins";

const route = useRoute();

const coinId = computed(() => route.params.coin_id?.toString());

const { data: coin } = useQuery({
  ...queries.countries.byCoin(coinId.value ?? ""),
  enabled: !!coinId.value,
});

const setTitle = computed(() => coin.value?.coin_set_id.title ?? undefined);

const country = computed(() => coin.value?.coin_set_id.country_id);

const imageUrl = computed(() =>
  coin.value && country.value
    ? getCoinImageUrl({
        baseCoinName: coin.value.base_coin_id.name,
        noramlisedCountryName: country.value.normalised_name,
        setTitle: setTitle.value,
      })
    : "",
);

const isAuthDialogOpen = ref(false);

const user = useSupabaseUser();

const { data: selectedCoin } = useQuery({
  ...queries.selectedCoins.byId(coinId.value ?? ""),
  enabled: !!user.value,
});

const { mutateAsync: selectCoin } = useSelectCoin();

const onCoinSelect = async () => {
  if (!user.value) isAuthDialogOpen.value = true;

  await selectCoin(coinId.value);
};
</script>

<template>
  <div class="max-w-2xl mx-auto py-4 sm:py-8">
    <AuthDialog v-model="isAuthDialogOpen" />
    <div v-if="coin">
      <Breadcrumb class="mb-4 sm:mb-6">
        <BreadcrumbList>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink
              :to="`/countries/${coin.coin_set_id.country_id.normalised_name}`"
            >
              {{ coin.coin_set_id.country_id.name }}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator v-if="setTitle">
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem v-if="setTitle">
            <BreadcrumbLink class="hover:text-muted-foreground">
              {{ setTitle }}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink
              :to="`/countries/${country?.normalised_name}/${coin.id}`"
            >
              {{ coin.base_coin_id.name }}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card class="w-[400px] mx-auto">
        <CardHeader class="flex flex-row justify-between gap-6">
          <div>
            <img :src="imageUrl" />
          </div>
          <div class="flex-1">
            <CardTitle class="text-2xl font-bold tracking-wide mb-2">
              {{ coin.base_coin_id.name }} Coin
            </CardTitle>
            <CardDescription
              v-if="country"
              class="text-sm text-muted-foreground flex flex-col gap-1"
            >
              <span class="flex gap-2">
                <Icon
                  :name="`flag:${country?.locale}-1x1`"
                  class="w-[20px] h-[20px] rounded-full"
                />
                {{ country?.name }}
              </span>
              <span v-if="setTitle">Part of the "{{ setTitle }}" set</span>
            </CardDescription>
          </div>
        </CardHeader>

        <CardFooter class="flex flex-col gap-2 px-6 pb-6">
          <Button
            v-if="!user || !selectedCoin"
            class="w-full flex items-center justify-center gap-2"
            size="lg"
            @click="onCoinSelect"
          >
            Add To Collection
            <Icon name="ion:plus" />
          </Button>

          <Button
            v-else
            class="w-full flex items-center justify-center gap-2"
            size="lg"
            variant="destructive"
            @click="onCoinSelect"
          >
            Remove From Collection
            <Icon name="ion:minus" />
          </Button>
          <NuxtLink
            :to="`/countries/${country?.normalised_name}`"
            class="w-full"
          >
            <Button
              class="w-full flex items-center justify-center gap-2 text-accent-foreground"
              variant="outline"
              size="lg"
            >
              View Country
              <Icon name="ion:eye" />
            </Button>
          </NuxtLink>
        </CardFooter>
      </Card>
    </div>
  </div>
</template>
