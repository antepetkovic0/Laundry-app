import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import NotAuthorized from "./pages/Error/NotAuthorized";
import NotFound from "./pages/Error/NotFound";

import "./scss/main.scss";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import AppRoutes from "./pages/app/AppRoutes";
import AuthRoutes from "./pages/AuthRoutes";

const App = () => (
  <Router>
    <ToastContainer />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        path="/auth"
        render={({ match }) => <AuthRoutes basePath={match.path} />}
      />
      <Route
        path="/app"
        render={({ match }) => <AppRoutes basePath={match.path} />}
      />

      <Route path="/unauthorized" component={NotAuthorized} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
