import { createQueryKeys } from "@lukemorales/query-key-factory";

import type { Database } from "~/types/database.types";

const getFullCountry = async (
  client: ReturnType<typeof useSupabaseClient<Database>>,
) => {
  const repsonse = await client
    .from("countries")
    .select("*")
    .select(
      `
            *,
            coin_sets:coin_sets(*, coins:coins(*, base_coin:base_coins(*)))
          `,
    );

  if (!repsonse.data) throw new Error("No data found");

  const countries = repsonse.data;

  if (!countries) return [];

  const countriesCopy = [...countries];

  return countriesCopy.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    return nameA.localeCompare(nameB);
  });
};

export default createQueryKeys("countries", {
  list: () => {
    const client = useSupabaseClient<Database>();

    return {
      queryKey: ["list"],
      queryFn: () => getFullCountry(client),
    };
  },
  byNormalisedName: (normalisedName: MaybeRef<string>) => {
    const client = useSupabaseClient<Database>();

    return {
      queryKey: [unref(normalisedName)],
      queryFn: async () => {
        const { data, error } = await client
          .from("countries")
          .select(
            "*, coin_sets:coin_sets(*, coins:coins(*, base_coin:base_coins(*)))",
          )
          .eq("normalised_name", unref(normalisedName))
          .single();

        if (error) throw error;

        if (!data) throw new Error("No data found");

        return data;
      },
    };
  },
  byCoin: (coinId: MaybeRef<string>) => {
    const client = useSupabaseClient<Database>();

    return {
      queryKey: [unref(coinId)],
      queryFn: async () => {
        const { data, error } = await client
          .from("coins")
          .select(
            "id, base_coin_id:base_coin_id(*), coin_set_id:coin_set_id(title, country_id:country_id(*))",
          )
          .eq("id", unref(coinId))
          .single();

        if (error) throw error;

        if (!data) throw new Error("No data found");

        return data;
      },
    };
  },
});

type FullCountryList = Awaited<ReturnType<typeof getFullCountry>>;
export type FullCountry = FullCountryList[number];

export type FullCoinset = FullCountry["coin_sets"][number];
export type FullCoin = FullCoinset["coins"][number];
