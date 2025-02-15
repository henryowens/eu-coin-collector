import type { UserAttributes } from "@supabase/supabase-js";

import queries from "~/queries";

export const useVerifyEmailMutation = useSupabaseMutation(
  (supabase) => (email: string) => supabase.auth.signInWithOtp({ email }),
);

export const useVerifyOtpMutation = useSupabaseMutation(
  (supabase) =>
    ({ email, otp }: { email: string; otp: string }) =>
      supabase.auth.verifyOtp({ email, token: otp, type: "email" }),
  (queryClient) => ({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queries.selectedCoins._def });
    },
  }),
);

export const useUpdateUserMutation = useSupabaseMutation(
  (supabase) => (user: UserAttributes) => supabase.auth.updateUser(user),
);
