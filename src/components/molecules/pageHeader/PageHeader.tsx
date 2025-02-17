import Logout from "@components/atoms/logout/Logout";
import { Drawer, Flex } from "antd";
import { PageHeaderStyle } from "./PageHeader.style";
import { useState } from "react";
import HamburguerMenuButton from "@components/atoms/hamburguerMenuButton/HamburguerMenuButton";

const PageHeader = () => {
  const [open, setOpen] = useState<boolean>(false);

  const openDrawer = () => {
    setOpen(true);
  };

  const onCloseDrawer = () => {
    setOpen(false);
  };

  return (
    <Flex align="center" justify="space-between" style={PageHeaderStyle}>
      <HamburguerMenuButton onClick={openDrawer} />
      <span className="pageTitle">Digimon Card Library</span>
      <Drawer open={open} onClose={onCloseDrawer}>
        <Logout className="show" />
      </Drawer>
      <Logout />
    </Flex>
  );
};

export default PageHeader;
