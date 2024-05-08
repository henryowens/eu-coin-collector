import { createQueryKeys } from "@lukemorales/query-key-factory";
import axios from "axios";

import type { Coins } from "~/models/coins";

export default createQueryKeys("coins", {
  list: () => ({
    queryKey: ["list"],
    queryFn: async () => {
      const repsonse = await axios.get<Coins>("/api/coins.json");

      return repsonse.data;
    },
  }),
});
