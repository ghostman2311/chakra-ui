import { Button, SystemStyleObject } from "@chakra-ui/react";

interface IOutlinedButton {
  fontSize?: string | number;
  title: string;
  sx?: SystemStyleObject;
}

const OutlineButton = ({ fontSize, title, sx }: IOutlinedButton) => {
  return (
    <Button
      bgColor={"#18212d"}
      color={"#6576ff"}
      borderColor={"#333f77"}
      variant="outline"
      fontSize={fontSize ? fontSize : 15}
      sx={{
        "&:hover": {
          bgColor: "#6576ff",
          color: "white",
        },
        ...sx
      }}
    >
      {title}
    </Button>
  );
};

export default OutlineButton;
