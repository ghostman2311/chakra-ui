import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Global, css } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./ThemeProvider.tsx";
// const theme = extendTheme({
//   fonts: {
//     body: "Inter, sans-serif",
//     heading: "Roboto, sans-serif",
//   },
//   colors: {
//     main: "#798BFF",
//   },
// });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider>
      <Global
        styles={css`
          // Additional global styles go here
        `}
      />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
