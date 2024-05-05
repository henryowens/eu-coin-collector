import { createQueryKeys } from "@lukemorales/query-key-factory";
import axios from "axios";

import type { Countries } from "~/models/countries";

export default createQueryKeys("countries", {
  list: () => ({
    queryKey: ["list"],
    queryFn: async () => {
      const repsonse = await axios.get<Countries>("/api/countries.json");

      return repsonse.data;
    },
  }),
});
