import { Button, SystemStyleObject } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IOutlinedButton {
  fontSize?: string | number;
  title: string;
  sx?: SystemStyleObject;
  icon?:ReactNode;
  onClick?:()=>void;
}

const OutlineButton = ({ fontSize, title, sx ,icon,onClick}: IOutlinedButton) => {
  return (
    <Button
      bgColor={"background"}
      color={"active"}
      borderColor={"active"}
      variant="outline"
      fontSize={fontSize ? fontSize : 15}
      onClick={onClick}
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
