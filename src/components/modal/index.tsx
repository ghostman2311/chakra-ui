import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";

import { ReactNode } from "react";
interface IModal {
  open: boolean;
  onClose: () => void;
  title?: string;
  footer?: ReactNode;
  children?: ReactNode;
  paddingTop?: string | number;
}
const CommonModal = ({
  open,
  onClose,
  title,
  footer,
  children,
  paddingTop,
}: IModal) => {
  console.log("open", open);
  return (
    <Modal isOpen={open} onClose={onClose} size={"2xl"} isCentered={true}>
      <ModalOverlay />
      <ModalContent
        sx={{ backgroundColor: "specificBackground", color: "heading" }}
      >
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton color="white" />
        <ModalBody py={7} pt={paddingTop ? paddingTop : 12} pb={2} mx={5}>
          {children}
        </ModalBody>

        <ModalFooter
          width={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"start"}
          mx={5}
          pb={12}
        >
          {footer ? footer : null}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CommonModal;
