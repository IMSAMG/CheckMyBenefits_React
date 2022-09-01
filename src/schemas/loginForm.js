import * as yup from "yup";

export const loginForm = {
  email: "",
  password: "",
};

export const loginFormSchemaYup = yup.object().shape({
  email: yup
    .string()
    .required("Email is required.")
    .email("Email must be a valid email"),
  password: yup.string().required("Password is required."),
});
