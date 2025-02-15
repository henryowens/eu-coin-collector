import type { RealtimeChannel } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/vue-query";

import queries from "~/queries";
import type { Database } from "~/types/database.types";

export default createSharedComposable(() => {
  const client = useSupabaseClient<Database>();
  const queryResponse = useQuery(queries.selectedCoins.list());

  let realtimeChannel: RealtimeChannel;

  onMounted(() => {
    realtimeChannel = client
      .channel("public:selected_coins")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "selected_coins" },
        () => queryResponse.refetch(),
      );

    realtimeChannel.subscribe();
  });

  onUnmounted(() => {
    client.removeChannel(realtimeChannel);
  });

  return queryResponse;
});
