import { createQueryKeys } from "@lukemorales/query-key-factory";
import axios from "axios";

import type { CountriesResponse } from "~/models/api";

export default createQueryKeys("countries", {
  list: () => ({
    queryKey: ["list"],
    queryFn: async () => {
      const repsonse = await axios.get<CountriesResponse>("/api/countries");

      return repsonse.data;
    },
  }),
});
