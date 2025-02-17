import { Button } from "antd";
import { FC } from "react";
import useAuthContext from "@hooks/useAuthContext";
import { LogoutProps } from "./Logout.types";

const Logout: FC<LogoutProps> = ({ className = "hide-on-xs" }) => {
  const { logout } = useAuthContext();

  return (
    <Button variant="text" onClick={logout} className={className}>
      Logout
    </Button>
  );
};

export default Logout;
