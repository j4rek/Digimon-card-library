import { FC, PropsWithChildren, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import useLocalStorage from "@hooks/useLocalStorage";

const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const { getLS, setLS, removeLS } = useLocalStorage();

  const isAuthenticated = () => !!(token || getLS("tnpo-token"));

  const login = (token: string) => {
    try {
      setLS("tnpo-token", token);
      setToken(token);
    } catch (err) {
      console.error("Error during login: " + err);
    }
  };

  const logout = () => {
    try {
      removeLS("tnpo-token");
      setToken(null);
    } catch (err) {
      console.error("Error during logout: " + err);
    }
  };

  useEffect(() => {
    const checkToken = () => {
      const storedToken = getLS("tnpo-token");
      if (storedToken) {
        setToken(storedToken);
      }
    };

    checkToken();
  }, []);

  return (
    <AuthContext value={{ token, setToken, isAuthenticated, logout, login }}>
      {children}
    </AuthContext>
  );
};

export default AuthContextProvider;
