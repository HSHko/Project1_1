import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import GlobalStyle from "styles/GlobalStyle";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { StyledTheme } from "styles/theme";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/core";
import { MaterialTheme } from "styles/theme";

const LoggedOut = React.lazy(() => import("./logged_out/Main"));

function App() {
  return (
    <Router>
      <CssBaseline />
      <GlobalStyle />
      <StyledThemeProvider theme={StyledTheme}>
        <MaterialThemeProvider theme={MaterialTheme}>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route>
                <LoggedOut />
              </Route>
            </Switch>
          </React.Suspense>
        </MaterialThemeProvider>
      </StyledThemeProvider>
    </Router>
  );
}

export default App;
