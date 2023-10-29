import joi from "joi-browser";

export const SigninInputSchema = [
  {
    name: "email",
    type: "email",
    text: "Email",
    element: "input",
    validator: joi.object({
      email: joi.string().min(5).max(255).required().email(),
    }),
  },
  {
    name: "password",
    type: "password",
    text: "Password",
    element: "input",
    validator: joi.object({
      password: joi.string().min(8).max(255).required(),
    }),
  },
];

export const SignupInputSchema = [
  {
    name: "name",
    type: "string",
    text: "Name",
    element: "input",
    validator: joi.object({ name: joi.string().min(5).max(20).required() }),
  },
  {
    name: "email",
    type: "email",
    text: "Email",
    element: "input",
    validator: joi.object({
      email: joi.string().min(5).max(255).required().email(),
    }),
  },
  {
    name: "password",
    type: "password",
    text: "Password",
    element: "input",
    validator: joi.object({
      password: joi.string().min(8).max(255).required(),
    }),
  },
  {
    name: "confirm_password",
    type: "password",
    text: "Confirm password",
    element: "input",
    validator: joi.object({
      confirm_password: joi.string().min(8).max(255).required(),
    }),
  },
];

export const ModifyPwdInputSchema = [
  {
    name: "old_password",
    type: "password",
    text: "Old password",
    element: "input",
    validator: joi.object({
      old_password: joi.string().min(8).max(255).required(),
    }),
  },
  {
    name: "password",
    type: "password",
    text: "Password",
    element: "input",
    validator: joi.object({
      password: joi.string().min(8).max(255).required(),
    }),
  },
  {
    name: "confirm_password",
    type: "password",
    text: "Confirm password",
    element: "input",
    validator: joi.object({
      confirm_password: joi.string().min(8).max(255).required(),
    }),
  },
];

export const ForgotPwdInputSchema = [
  {
    name: "email",
    type: "email",
    text: "Email",
    element: "input",
    validator: joi.object({
      email: joi.string().min(5).max(255).required().email(),
    }),
  },
];

export const ResetPwdInputSchema = [
  {
    name: "email",
    type: "email",
    text: "Email",
    element: "input",
    validator: joi.object({
      email: joi.string().min(5).max(255).required().email(),
    }),
  },
  {
    name: "password",
    type: "password",
    text: "Password",
    element: "input",
    validator: joi.object({
      password: joi.string().min(8).max(255).required(),
    }),
  },
  {
    name: "confirm_password",
    type: "password",
    text: "Confirm password",
    element: "input",
    validator: joi.object({
      confirm_password: joi.string().min(8).max(255).required(),
    }),
  },
  {
    name: "reset_token",
    type: "string",
    text: "Reset token",
    element: "textarea",
    validator: joi.object({
      reset_token: joi.string().min(32).max(1023).required(),
    }),
  },
];
