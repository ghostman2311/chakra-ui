import { Button, SystemStyleObject } from "@chakra-ui/react";

interface IContainedButton {
  fontSize?: string | number;
  title: string;
  sx?: SystemStyleObject;
}

const ContainedButton = ({ fontSize, title, sx }: IContainedButton) => {
  return (
    <Button
      bgColor={"active"}
      color={"white"}
      borderColor={"#333f77"}
      fontSize={fontSize ? fontSize : 15}
      sx={{
        "&:hover": {
          bgColor: "active",
        },
        ...sx,
      }}
    >
      {title}
    </Button>
  );
};

export default ContainedButton;
