import { createContext } from "react";
import { AuthContextProps } from "./AuthContext.types";

export const AuthContext = createContext<AuthContextProps>({
  setToken: () => {},
  isAuthenticated: () => false,
  logout: () => {},
  login: (_token: string) => {},
});
