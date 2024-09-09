import type { SignInInput } from "@aws-amplify/auth";

const loginForm = wrapFormConfig<SignInInput>(({ login }) => ({
  title: "Sign In",
  callback: login,
  fields: {
    username: {
      label: "Email",
      required: true,
      type: "email",
      placeholder: "Joe Bloggs",
    },
    password: {
      label: "Password",
      required: true,
      type: "password",
      placeholder: "************",
    },
  },
  initalValues: {
    username: "",
    password: "",
  },
  submitLabel: "Sign In",
}));

export default loginForm;
