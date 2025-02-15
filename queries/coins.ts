import { createQueryKeys } from "@lukemorales/query-key-factory";

import type { Database } from "~/types/database.types";

export default createQueryKeys("coins", {
  list: () => {
    const client = useSupabaseClient<Database>();

    return {
      queryKey: ["list"],
      queryFn: async () => {
        const repsonse = await client.from("coins").select("*");

        return repsonse.data;
      },
    };
  },
  details: (id: string) => {
    const client = useSupabaseClient<Database>();

    return {
      queryKey: ["details", id],
      queryFn: async () => {
        const repsonse = await client.from("coins").select("*").eq("id", id);

        return repsonse.data;
      },
    };
  },
});
