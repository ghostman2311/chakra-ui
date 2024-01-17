import { Button, SystemStyleObject } from "@chakra-ui/react";

interface IContainedButton {
  fontSize?: string | number;
  title: string;
  sx?: SystemStyleObject;
}

const ContainedButton = ({ fontSize, title, sx }: IContainedButton) => {
  return (
    <Button
      bgColor={"#6576ff"}
      color={"white"}
      borderColor={"#333f77"}
      variant="outline"
      fontSize={fontSize ? fontSize : 15}
      sx={{
        "&:hover": {
          bgColor: "#6576ff",
        },
        ...sx,
      }}
    >
      {title}
    </Button>
  );
};

export default ContainedButton;
