import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import GlobalStyle from "./styled/reset.css";

import { store } from "./store";

import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);
