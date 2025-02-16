import { useQuery } from "@tanstack/vue-query";

import queries from "~/queries";

export default createSharedComposable(() => {
  const { data: selectedCoins } = useRealtimeSelectedCoins();
  const { data: coins } = useQuery(queries.coins.list());

  return computed(() => {
    const selectedCoinsTotal = selectedCoins.value?.length ?? 0;

    const coinsTotal = coins.value?.length ?? 0;

    if (!selectedCoins.value || selectedCoinsTotal < 0)
      return { progress: 0, selectedCoinsTotal, coinsTotal };

    return {
      progress: (selectedCoinsTotal / coinsTotal) * 100,
      selectedCoinsTotal,
      coinsTotal,
    };
  });
});
