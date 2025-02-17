import { FC, PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthContext from "@hooks/useAuthContext";

const RouteGuard: FC<PropsWithChildren> = ({ children }) => {
  const { isAuthenticated, token } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const checkIsAuthenticated = () => {
      if (!isAuthenticated()) {
        navigate("/login", { replace: true });
      }
    };

    checkIsAuthenticated();
  }, [token]);

  return children;
};

export default RouteGuard;
