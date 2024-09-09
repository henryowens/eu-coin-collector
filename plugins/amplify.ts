import {
  autoSignIn,
  confirmSignUp,
  type ConfirmSignUpInput,
  type ConfirmSignUpOutput,
  fetchUserAttributes,
  getCurrentUser,
  type GetCurrentUserOutput,
  signIn,
  type SignInInput,
  type SignInOutput,
  signUp,
  type SignUpInput,
  type SignUpOutput,
} from "aws-amplify/auth";

import amplifyConfig from "../amplify.config";

export type AmplifyPlugin = {
  signIn: (input: SignInInput) => Promise<SignInOutput>;
  signUp: (input: SignUpInput) => Promise<SignUpOutput>;
  getCurrentUser: () => Promise<GetCurrentUserOutput>;
  confirmSignUp: (input: ConfirmSignUpInput) => Promise<ConfirmSignUpOutput>;
  autoSignIn: typeof autoSignIn;
  fetchUserAttributes: typeof fetchUserAttributes;
};

export default defineNuxtPlugin<{ amplify: AmplifyPlugin }>(async () => {
  const { Amplify } = await import("aws-amplify");

  Amplify.configure(amplifyConfig, { ssr: false });

  return {
    provide: {
      amplify: {
        signIn,
        signUp,
        getCurrentUser,
        confirmSignUp,
        autoSignIn,
        fetchUserAttributes,
      },
    },
  };
});
