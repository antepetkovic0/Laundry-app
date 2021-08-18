import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import RouteAuth from "./utils/routeAuth";

import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import DashAdmin from "./pages/Dashboard/Admin/DashAdmin";
import NotFound from "./pages/NotFound/NotFound";
import Users from "./pages/Dashboard/Admin/Users/Users";

import "./modal.css";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/auth" component={Auth} />
      <RouteAuth path="/dashboard/admin" Component={DashAdmin} roles={[1]} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
