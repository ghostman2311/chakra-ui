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
      color={"active"}
      borderColor={"#333f77"}
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
      {title}
    </Button>
  );
};

export default OutlineButton;
