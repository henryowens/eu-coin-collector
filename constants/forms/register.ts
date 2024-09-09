import type { SignUpRequest } from "~/composables/useAuth";

const loginForm = wrapFormConfig<SignUpRequest>(({ register }) => ({
  title: "Create an account",
  callback: register,
  fields: {
    name: {
      label: "Name",
      required: true,
      type: "text",
      placeholder: "Joe Bloggs",
    },
    username: {
      label: "Email",
      required: true,
      type: "email",
      placeholder: "joe.bloggs@gmail.com",
    },
    password: {
      label: "Password",
      required: true,
      type: "password",
      placeholder: "************",
    },
  },
  initalValues: {
    name: "",
    username: "",
    password: "",
  },
  submitLabel: "Register",
}));

export default loginForm;
