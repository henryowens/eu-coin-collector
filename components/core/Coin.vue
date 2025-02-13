<script setup lang="ts">
import type { RealtimeChannel } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/vue-query";
import { ContentLoader } from "vue-content-loader";

import queries from "~/queries";
import type { FullCountry } from "~/queries/countries";
import type { Database } from "~/types/database.types";

const props = defineProps<{
  country: FullCountry;
  set: FullCountry["coin_sets"][number];
  coin: FullCountry["coin_sets"][number]["coins"][number];
}>();

defineEmits<{
  (e: "coin-selected"): void;
}>();

let realtimeChannel: RealtimeChannel;
const client = useSupabaseClient<Database>();
const user = useSupabaseUser();

const isLoading = ref(false);

const imageUrl = computed(
  () =>
    `/assets/coins/${props.country.normalised_name.toLowerCase()}/${props.set.title ? `${props.set.title.toLowerCase().replaceAll(" ", "_")}-` : ""}${props.coin.base_coin.name.toLowerCase().replaceAll(" ", "_")}.png`,
);

const { data: selectedCoins, refetch: refetchSelectedCoins } = useQuery(
  queries.selectedCoins.list(),
);
onMounted(() => {
  // Real time listener for new workouts
  realtimeChannel = client
    .channel("public:selected_coins")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "selected_coins" },
      () => refetchSelectedCoins(),
    );

  realtimeChannel.subscribe();
});

// Don't forget to unsubscribe when user left the page
onUnmounted(() => {
  client.removeChannel(realtimeChannel);
});
const isSelected = computed(() => {
  if (!user.value) return false;

  return !(
    !selectedCoins.value ||
    selectedCoins.value.findIndex(
      ({ coin_id: coinId }) => coinId === props.coin.id,
    ) === -1
  );
});
</script>

<template>
  <div
    class="coin"
    :class="{
      'coin-selected': isSelected,
    }"
    @click="$emit('coin-selected')"
  >
    <img
      :src="imageUrl"
      :alt="`Image of a ${coin.base_coin.value} coin from ${country.name}`"
      width="90"
      height="90"
      @load="() => (isLoading = false)"
    />
    <Transition name="fade">
      <ContentLoader
        v-if="isLoading"
        width="75"
        height="75"
        class="coin--loader"
      />
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.coin {
  @apply cursor-pointer;
  @apply h-[100px] w-[100px];
  @apply flex items-center justify-center;
  @apply relative;
  &--loader {
    @apply absolute;
    @apply rounded-full;
  }

  img {
    @apply h-[75px] w-[75px];
    @apply rounded-full;
    @apply outline;
    @apply outline-4;
    @apply outline-gray-200;
    @apply transition-all;
  }
  &:hover {
    img {
      @apply outline-8;
    }
  }
}
.coin-selected {
  @apply items-center;
  img {
    @apply transition-all;
    @apply relative;
    @apply outline-green-600;
  }
  &::after {
    content: "";
    @apply rounded-full h-[75px] w-[75px];
    @apply bg-green-600;
    @apply opacity-30;
    @apply absolute z-10;
  }
}
</style>
