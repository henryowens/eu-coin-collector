import type { ConfirmSignUpRequest } from "~/composables/useAuth";

const loginForm = wrapFormConfig<ConfirmSignUpRequest>(({ confirmSignUp }) => ({
  title: "Email Confirmation Code",
  callback: confirmSignUp,
  fields: {
    confirmationCode: {
      label: "Code",
      required: true,
      type: "text",
      placeholder: "123456",
    },
  },
  initalValues: {
    confirmationCode: "",
  },
  submitLabel: "Confirm",
}));

export default loginForm;
