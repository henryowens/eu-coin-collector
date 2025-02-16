<script setup lang="ts">
import type { FullCoinset } from "~/queries/countries";
import { useSelectCoin } from "~/queries/selectedCoins";
import type { Database } from "~/types/database.types";

defineProps<{
  set: FullCoinset;
  country: Database["public"]["Tables"]["countries"]["Row"];
}>();

const filterSelected = defineModel<"all" | "selected" | "unselected">({
  default: "all",
});

const isAuthDialogOpen = ref(false);

const { mutateAsync: selectCoin } = useSelectCoin();
const user = useSupabaseUser();

const onCoinSelect = async (coinId: string) => {
  if (!user.value) isAuthDialogOpen.value = true;

  await selectCoin(coinId);
};
</script>

<template>
  <div class="coin__set">
    <AuthDialog v-model="isAuthDialogOpen" />

    <h3 v-if="set.title">{{ set.title }}</h3>
    <div class="coin__set--coins">
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
</template>

<style lang="scss" scoped>
.coin__set {
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
</style>
