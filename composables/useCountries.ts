import { useQuery } from "@tanstack/vue-query";

import queries from "~/queries";

export default () =>
  useQuery({
    ...queries.countries.list(),
    staleTime: Infinity,
  });
