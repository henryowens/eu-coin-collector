import { createQueryKeys } from "@lukemorales/query-key-factory";

export default createQueryKeys("auth", {
  refreshUser: () => {
    const supabase = useSupabaseClient();

    return {
      queryKey: ["refreshUser"],
      queryFn: () => {
        const user = supabase.auth.getUser();

        return user;
      },
    };
  },
});
