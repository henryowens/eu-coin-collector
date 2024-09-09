import type { SignInInput } from "@aws-amplify/auth";

const forgotPasswordForm = wrapFormConfig<SignInInput>(() => ({
  title: "Forgot Password",
  callback: () => {},
  fields: {
    username: {
      label: "Email",
      required: true,
      type: "email",
      placeholder: "joe.bloggs@gmail.com",
    },
  },
  initalValues: {
    username: "",
  },
  submitLabel: "Submit",
}));

export default forgotPasswordForm;
