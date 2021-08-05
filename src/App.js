import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import RouteAuth from "./utils/routeAuth";

import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import DashAdmin from "./pages/Dashboard/Admin/DashAdmin";
import NotFound from "./pages/NotFound/NotFound";
import Users from "./pages/Dashboard/Admin/Users/Users";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/auth" component={Auth} />
      <Route path="/dashboard/admin" component={DashAdmin} />
      {/* <RouteAuth exact path="/dashboard/admin" Component={DashAdmin} /> */}
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
