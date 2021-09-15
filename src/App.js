import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Dashboard from "./pages/Dashboard/Dashboard";
import NotAuthorized from "./pages/Error/NotAuthorized";
import NotFound from "./pages/Error/NotFound";

import RouteAuth from "./utils/routeAuth";
import { rules } from "./utils/permissions";
import "./modal.css";

const App = () => (
  <Router>
    <ToastContainer />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/auth" component={Auth} />
      <Route
        path="/dashboard"
        component={Dashboard}
        rule={rules.MANAGE_DASHBOARD}
      />
      <Route path="/unauthorized" component={NotAuthorized} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
