import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle(() => ({
  fontSize: "sm",
  color: "base",
}));

export const textTheme = defineStyleConfig({
  baseStyle,
});
