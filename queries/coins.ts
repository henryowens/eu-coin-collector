import { createQueryKeys } from "@lukemorales/query-key-factory";
import axios from "axios";

import type { CoinsResponse } from "~/models/api";

export default createQueryKeys("coins", {
  list: () => ({
    queryKey: ["list"],
    queryFn: async () => {
      const repsonse = await axios.get<CoinsResponse>("/api/coins");

      return repsonse.data;
    },
  }),
});
