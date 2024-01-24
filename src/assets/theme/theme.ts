import { colors } from "./colors";
// import { textTheme } from "../../styles/Text/theme";
// import { gridItem } from "../../styles/GridItem/theme";
import semanticTokens from "../semanticTokens";

export const customTheme = {
  styles: {
    global: {
      html: {
        fontSize: "16px",
      },
      body: {
        bg: "background",
      },
    },
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    body: "Nunito, sans-serif",
    heading: "Nunito, sans-serif",
  },
  // colors,
  colors,
  radii: {
    base: "4px",
    lg: "8px",
    md: "4px",
    sm: "2px",
  },
  fontSizes: {
    xs: "0.6875rem",
    sm: "0.875rem",
    md: "0.9rem",
    lg: "1.025rem",
    xl: "1.15rem",
    "2xl": "1.3rem",
    "3xl": "1.575rem",
    "4xl": "1.925rem",
    "5xl": "2.5rem",
    "6xl": "3.25rem",
    "7xl": "4rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  components: {
    Table: {
      variants: {
        simple: {
          th: {
            fontSize: "xs",
            color: "base",
            fontWeight: 700,
          },
        },
      },
    },
  },
  semanticTokens: semanticTokens,
};