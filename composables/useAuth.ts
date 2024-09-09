import type { SignInInput } from "@aws-amplify/auth";
import { useQuery, useQueryClient } from "@tanstack/vue-query";

import queries from "~/queries";

export type SignUpRequest = {
  name: string;
  username: string;
  password: string;
};

export type ConfirmSignUpRequest = {
  confirmationCode: string;
};

export default () => {
  const queryClient = useQueryClient();
  const { data: userData, isLoading: isUserDataLoading } = useQuery(
    queries.me.details(),
  );
  const { data: userAttributes, isLoading: isUserAttributesLoading } = useQuery(
    queries.me.attributes(),
  );
  const { $amplify } = useNuxtApp();
  const signUpEmail = useState("USER_EMAIL", () => "");
  const router = useRouter();

  const isLoading = computed(
    () => isUserDataLoading.value || isUserAttributesLoading.value,
  );

  const login = async (request: SignInInput) => {
    await $amplify.signIn({
      ...request,
      options: { authFlowType: "USER_PASSWORD_AUTH" },
    });

    await queryClient.invalidateQueries({ queryKey: queries.me._def });

    router.push("/");
  };

  const register = async (request: SignUpRequest) => {
    signUpEmail.value = "";

    console.log("Registering", request);
    try {
      await $amplify.signUp({
        password: request.password,
        username: request.username,
        options: {
          userAttributes: {
            name: request.name,
            email: request.username,
          },
          autoSignIn: {
            enabled: true,
          },
        },
      });

      signUpEmail.value = request.username;
      router.push("/auth/verify");
    } catch (error) {
      console.log("There was an issue signing up", error);
      throw error;
    }
  };

  const confirmSignUp = async ({ confirmationCode }: ConfirmSignUpRequest) => {
    try {
      console.log("signUpEmail", signUpEmail.value);
      console.log("user", userData.value);
      if (!signUpEmail.value) throw new Error("No email provided");
      await $amplify.confirmSignUp({
        username: signUpEmail.value,
        confirmationCode,
      });
      router.push("/auth/login");
    } catch (error) {
      console.log("There was an issue signing up", error);
      throw error;
    }
  };

  const isLoggedIn = computed(() => userData.value?.signedIn ?? false);

  const userDetails = computed(() => userData.value?.user ?? undefined);

  const methods = {
    login,
    register,
    confirmSignUp,
  };

  const computeds = {
    isLoggedIn,
    userDetails,
    isLoading,
  };

  const properties = {
    signUpEmail,
    userData,
    userAttributes,
  };

  return {
    ...methods,
    ...computeds,
    ...properties,
  };
};
