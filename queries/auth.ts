import { createQueryKeys } from "@lukemorales/query-key-factory";

import queries from ".";

export default createQueryKeys("auth", {});

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
