import {
  type MutationObserverOptions,
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/vue-query";

import type { Database } from "~/types/database.types";

type SupabaseCallback<CBArgs, D, E> = (
  args: CBArgs,
) => Promise<{ error: E; data: D }>;

const wrapSupabaseRequest =
  <CBArgs, D, E>(cb: SupabaseCallback<CBArgs, D, E>) =>
  async (args: CBArgs) => {
    const { data, error } = await cb(args);

    if (error) {
      throw error;
    }

    return data;
  };

const useSupabaseMutation =
  <CBArgs, D, E>(
    cb: (
      supabase: ReturnType<typeof useSupabaseClient<Database>>,
    ) => SupabaseCallback<CBArgs, D, E>,
    optionsCb?: (
      queryClient: QueryClient,
    ) => MaybeRef<
      Omit<MutationObserverOptions<D, Error, CBArgs, unknown>, "mutationFn">
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
