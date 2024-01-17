import type { ThemeOverride } from "@chakra-ui/react";
import { Colors } from "./colors";


export const customTheme: ThemeOverride = {
  config: {
    initialColorMode: "dark",
  },
  fonts: {
    body: "'Inter Variable', sans-serif",
    heading: "'Inter Variable', sans-serif",
  },
  colors: Colors,
  radii: {
    base: "4px",
    lg: "8px",
    md: "4px",
    sm: "2px",
  },
};
