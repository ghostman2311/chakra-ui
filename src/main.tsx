import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider,CSSReset, extendTheme } from "@chakra-ui/react";
import { Global, css } from '@emotion/react';
const theme = extendTheme({
  fonts: {
    body: "Inter, sans-serif", 
    heading: "Roboto, sans-serif", 
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider theme={theme}>
    <CSSReset />
    <Global
      styles={css`
        // Additional global styles go here
      `}
    />
    <App />
  </ChakraProvider>
);
