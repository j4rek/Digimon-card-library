import { MenuOutlined } from "@ant-design/icons";
import { HamburguerMenuButtonProps } from "./HamburguerMenuButton.types";
import { FC } from "react";

const HamburguerMenuButton: FC<HamburguerMenuButtonProps> = ({
  onClick,
  className = "burguerIcon hide-from-xs",
}) => {
  const clickHandler = () => {
    onClick();
  };

  return <MenuOutlined onClick={clickHandler} className={className} />;
};

export default HamburguerMenuButton;
