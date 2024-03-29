import { memo, ReactNode } from "react";
import { useMemo } from "react";
import { customTheme } from "./assets/theme/theme.ts";
import { ChakraProvider, extendTheme, useColorMode } from "@chakra-ui/react";

type ThemeLocaleProviderProps = {
  children: ReactNode;
};

// eslint-disable-next-line react-refresh/only-export-components
const ThemeProvider = ({ children }: ThemeLocaleProviderProps) => {
  const theme = useMemo(() => {
    return extendTheme({
      borders: {
        "1px": `1px solid`,
      },
      ...customTheme,
    });
  }, []);

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(ThemeProvider);
