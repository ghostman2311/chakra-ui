import {
  Drawer,
  DrawerBody,
  DrawerContent,
} from "@chakra-ui/react";
import React from "react";
import SideBarMenu from "../SideBarMenu";

const SideDrawer = ({
  showDrawer,
  onClose,
}: {
  showDrawer: boolean;
  onClose: () => void;
}) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Drawer
      isOpen={showDrawer}
      placement="left"
      onClose={onClose}
      finalFocusRef={btnRef}
      size={{base:'xs'}}
    >
      <DrawerContent
        sx={{
          backgroundColor: "background",
          border: "1px solid #203247",
          marginTop: "64px",
        }}
      >
        <DrawerBody>
          <SideBarMenu />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SideDrawer;
