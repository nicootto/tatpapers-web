import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { Router, Route } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";

import { GlobalStyle } from "./globalStyles/global";
import { defaultTheme } from "./globalStyles/themes";
import { history } from "./history";
import { App } from "./app";

const Root = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Router history={history}>
        <QueryParamProvider ReactRouterRoute={Route}>
          <App />
        </QueryParamProvider>
      </Router>
    </ThemeProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
