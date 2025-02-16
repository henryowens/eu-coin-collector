import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useMutation, useQueryClient } from "@tanstack/vue-query";

import type { Database } from "~/types/database.types";

import queries from ".";

export type SelectedCoinList = Awaited<
  ReturnType<ReturnType<typeof queries.selectedCoins.list>["queryFn"]>
>;

export default createQueryKeys("selectedCoins", {
  list: () => {
    const client = useSupabaseClient<Database>();
    const user = useSupabaseUser();

    return {
      queryKey: ["list"],
      queryFn: async () => {
        if (!user.value || !user.value.id)
          throw new Error("User not found for selected coins");

        const { data, error } = await client
          .from("selected_coins")
          .select("*")
          .eq("user_id", user.value.id);

        if (error) throw error;

        return data;
      },
    };
  },
});

export const useSelectCoin = () => {
  const client = useSupabaseClient<Database>();
  const user = useSupabaseUser();
  const queryClient = useQueryClient();

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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queries.selectedCoins._def });
    },
  });
};
