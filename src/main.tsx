import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
import { StoreProvider } from "./stores/index.tsx";
// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// });
// <ThemeProvider theme={darkTheme}>
//   <CssBaseline />
// </ThemeProvider>;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
