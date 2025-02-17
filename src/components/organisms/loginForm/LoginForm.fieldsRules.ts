import { FormRule } from "antd";

export const emailRules: Array<FormRule> = [
  {
    required: true,
    message: "Email is required; Please fill this field",
  },
  {
    type: "email",
    message: "The input is not valid E-mail!",
  },
];

export const passwordRules: Array<FormRule> = [
  {
    required: true,
    message: "Password is required; Please fill this field",
  },
  { min: 8, message: "Password must be at least 8 characters long!" },
];
