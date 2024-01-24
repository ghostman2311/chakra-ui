import { Button, SystemStyleObject } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IOutlinedButton {
  fontSize?: string | number;
  title: string;
  sx?: SystemStyleObject;
  icon?:ReactNode;
}

const OutlineButton = ({ fontSize, title, sx ,icon}: IOutlinedButton) => {
  return (
    <Button
      bgColor={"background"}
      color={"active"}
      borderColor={"active"}
      variant="outline"
      fontSize={fontSize ? fontSize : 15}
      sx={{
        "&:hover": {
          bgColor: "active",
          color: "white",
        },
        ...sx
      }}
    >
     {icon && icon} {title}
    </Button>
  );
};

export default OutlineButton;
