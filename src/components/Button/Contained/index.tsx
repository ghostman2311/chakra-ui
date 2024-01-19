import { Button, SystemStyleObject } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IContainedButton {
  fontSize?: string | number;
  title: string;
  sx?: SystemStyleObject;
  bgColor?:string;
  color?:string;
  icon?:ReactNode;
}

const ContainedButton = ({ fontSize, title, sx,bgColor,color,icon }: IContainedButton) => {
  return (
    <Button
      bgColor={bgColor?bgColor:"active"}
      color={color?color:"white"}
      borderColor={"#333f77"}
      fontSize={fontSize ? fontSize : 15}
      sx={{
        "&:hover": {
          bgColor: bgColor?bgColor:"active",
        },
        ...sx,
      }}
      display={'flex'}
      gap={icon?2:0}
    >
    {icon && icon}  {title}
    </Button>
  );
};

export default ContainedButton;
