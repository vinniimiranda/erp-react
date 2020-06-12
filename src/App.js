import React, { useState } from "react";
import { Router } from "react-router";
import { SnackbarProvider } from "notistack";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./config/ReactotronConfig";
import history from "./services/history";
import Routes from "./routes/index";
import { Switch, Box } from "@material-ui/core";

function App() {
  const [prefersDarkMode, setPrefersDarkMode] = useState(true);
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          primary: {
            main: prefersDarkMode ? "#FF7A00" : "#00BFA6",
          },
          secondary: {
            main: prefersDarkMode ? "#00DDAA" : "#00B0FF",
          },
          background: {
            default: prefersDarkMode ? "#000014" : "#FAFAFA",
            paper: prefersDarkMode ? "#111128" : "#EEE",
          },
          text: {
            primary: prefersDarkMode ? "#FFF" : "#666",
            secondary: prefersDarkMode ? "#FFF" : "#999",
          },
        },
      }),
    [prefersDarkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box position="absolute" top="1rem" right="1rem">
        <Switch
          title="Dark mode"
          checked={prefersDarkMode}
          color="primary"
          onChange={() => setPrefersDarkMode(!prefersDarkMode)}
        />
      </Box>
      <SnackbarProvider maxSnack={3}>
        <Router history={history}>
          <Routes />
        </Router>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
