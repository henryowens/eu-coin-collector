import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useMutation } from "@tanstack/vue-query";

import type { Database } from "~/types/database.types";

const getSelectedCoinsList = async (
  user: ReturnType<typeof useSupabaseUser>,
  client: ReturnType<typeof useSupabaseClient<Database>>,
) => {
  if (!user.value || !user.value.id)
    throw new Error("User not found for selected coins");

  const { data, error } = await client
    .from("selected_coins")
    .select("*")
    .eq("user_id", user.value.id);

  if (error) throw error;

  return data;
};

export type SelectedCoinList = Awaited<ReturnType<typeof getSelectedCoinsList>>;

export default createQueryKeys("selectedCoins", {
  list: () => {
    const client = useSupabaseClient<Database>();
    const user = useSupabaseUser();

    return {
      queryKey: ["list"],
      queryFn: () => getSelectedCoinsList(user, client),
    };
  },
});

export const useSelectCoin = () => {
  const client = useSupabaseClient<Database>();
  const user = useSupabaseUser();

  return useMutation({
    mutationFn: async (coinId: string) => {
      if (!user.value || !user.value.id)
        throw new Error(`User not found to select coin ${coinId}`);

      const { data, error } = await client
        .from("selected_coins")
        .select("*")
        .eq("coin_id", coinId)
        .eq("user_id", user.value.id);

      if (error) throw error;

      if (data && data.length) {
        const { data, error } = await client
          .from("selected_coins")
          .delete()
          .eq("coin_id", coinId)
          .eq("user_id", user.value.id);

        if (error) {
          throw error;
        }

        return data;
      } else {
        const { data, error } = await client.from("selected_coins").insert([
          {
            coin_id: coinId,
            user_id: user.value.id,
          },
        ]);

        if (error) throw error;

        return data;
      }
    },
  });
};
