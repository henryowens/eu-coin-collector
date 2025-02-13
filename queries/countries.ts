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

  return repsonse.data;
};

export default createQueryKeys("countries", {
  list: () => {
    const client = useSupabaseClient<Database>();

    return {
      queryKey: ["list"],
      queryFn: () => getFullCountry(client),
    };
  },
});

type FullCountryList = Awaited<ReturnType<typeof getFullCountry>>;
export type FullCountry = FullCountryList[number];
