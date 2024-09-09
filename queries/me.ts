import { createQueryKeys } from "@lukemorales/query-key-factory";

export default createQueryKeys("me", {
  details: () => {
    const { $amplify } = useNuxtApp();

    return {
      queryKey: ["details"],
      queryFn: async () => {
        try {
          const response = await $amplify.getCurrentUser();
          console.log("Current User", response);

          return {
            signedIn: true,
            user: response,
          };
        } catch (error) {
          return {
            signedIn: false,
            user: null,
          };
        }
      },
    };
  },
  attributes: () => {
    const { $amplify } = useNuxtApp();

    return {
      queryKey: ["attributes"],
      queryFn: async () => {
        try {
          const response = await $amplify.fetchUserAttributes();

          return response;
        } catch (error) {
          return [];
        }
      },
    };
  },
});
