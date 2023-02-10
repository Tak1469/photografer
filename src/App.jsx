import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}
