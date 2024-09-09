import type { ResourcesConfig } from "aws-amplify";

export default {
  Auth: {
    Cognito: {
      userPoolId: "eu-north-1_IUMgBwa8Z",
      userPoolClientId: "6pf3ecbo9slg6k78g47o6qprq8",
      identityPoolId: "eu-north-1:f100aff4-dfcf-4d82-9573-ca2e13acbd0d",
      loginWith: {
        email: true,
      },
      signUpVerificationMethod: "code",
      userAttributes: {
        email: {
          required: true,
        },
      },

      allowGuestAccess: true,
      passwordFormat: {
        minLength: 8,
        requireLowercase: true,
        requireUppercase: true,
        requireNumbers: true,
        requireSpecialCharacters: true,
      },
    },
  },
} satisfies ResourcesConfig;
