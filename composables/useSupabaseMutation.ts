import {
  type MutationObserverOptions,
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/vue-query";

import type { Database } from "~/types/database.types";

type SupabaseCallback<CBArgs, R> = (args: CBArgs) => Promise<R>;

type SupabaseResponse = { data: any; error: any };
const wrapSupabaseRequest =
  <CBArgs, R extends SupabaseResponse>(cb: SupabaseCallback<CBArgs, R>) =>
  async (args: CBArgs) => {
    const { data, error } = await cb(args);

    if (error) {
      throw error;
    }

    return data;
  };

const useSupabaseMutation =
  <CBArgs, R extends SupabaseResponse>(
    cb: (
      supabase: ReturnType<typeof useSupabaseClient<Database>>,
    ) => SupabaseCallback<CBArgs, R>,
    optionsCb?: (
      queryClient: QueryClient,
    ) => MaybeRef<
      Omit<
        MutationObserverOptions<R["data"], Error, CBArgs, unknown>,
        "mutationFn"
      >
    >,
  ) =>
  () => {
    const supabase = useSupabaseClient<Database>();
    const queryClient = useQueryClient();

    return useMutation({
      ...(optionsCb && optionsCb(queryClient)),
      mutationFn: wrapSupabaseRequest(cb(supabase)),
    });
  };

export default useSupabaseMutation;
