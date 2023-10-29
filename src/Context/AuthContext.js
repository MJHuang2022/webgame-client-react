import { createContext } from "react";

const AuthContext = createContext({
  user: null,
  token: "",
  isSignined: false,
  signin: () => {},
  signout: () => {},
  updateUser: () => {},
});

export default AuthContext;
