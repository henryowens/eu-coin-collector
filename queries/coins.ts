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
});
