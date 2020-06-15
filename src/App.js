import React from "react";
import "./config/ReactotronConfig";

import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Router } from "react-router";
import { SnackbarProvider } from "notistack";

import DateFnsUtils from "@date-io/date-fns";
import ptLocale from "date-fns/locale/pt-BR";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import history from "./services/history";
import Routes from "./routes/index";
import { store, persistor } from "./store";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

const ThemeContext = () => {
  const { mode } = useSelector((state) => state.theme);
  const prefersDarkMode = mode === "dark";

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

      <SnackbarProvider maxSnack={3}>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptLocale}>
          <Router history={history}>
            <Routes />
          </Router>
        </MuiPickersUtilsProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeContext />
      </PersistGate>
    </Provider>
  );
}

export default App;
