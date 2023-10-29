export const SigninDataSchema = {
  request: {
    url: "auth/signin",
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    isNeedJwt: false,
    body: ["email", "password"],
  },
  response: {
    body: ["email", "name", "image", "country", "address", "phone", "age", "jwt"],
  },
};

export const SignupDataSchema = {
  request: {
    url: "auth/signup",
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    isNeedJwt: false,
    body: ["name", "email", "password", "confirm_password"],
  },
  response: {
    body: ["email"],
  },
};

export const ModifyPwdDataSchema = {
  request: {
    url: "user",
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    isNeedJwt: true,
    body: ["old_password", "password", "confirm_password"],
  },
  response: {
    body: ["email", "name", "image", "country", "address", "phone", "age", "jwt"],
  },
};

export const ForgotPwdDataSchema = {
  request: {
    url: "auth/forgotpwd",
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    isNeedJwt: false,
    body: ["email"],
  },
  response: {
    body: ["email"],
  },
};

export const ResetPwdDataSchema = {
  request: {
    url: "auth/resetpwd",
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    isNeedJwt: false,
    body: ["email", "password", "confirm_password", "reset_token"],
  },
  response: {
    body: ["email"],
  },
};