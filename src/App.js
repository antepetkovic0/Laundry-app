import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import NotAuthorized from "./pages/Error/NotAuthorized";
import NotFound from "./pages/Error/NotFound";
import Home from "./pages/Home";
import AuthRoutes from "./pages/AuthRoutes";

import DashboardRoutes from "./pages/DashboardRoutes";

import "./scss/main.scss";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SpecificShop from "./components/Shops/SpecificShop";
import { rules } from "./utils/permissions";
import SpecificProduct from "./components/Products/SpecificProduct";

const App = () => (
  <Router>
    <ToastContainer />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        path="/auth"
        render={({ match }) => <AuthRoutes basePath={match.path} />}
      />

      <PrivateRoute
        // key={route.path}
        path="/dashboard/shops/:slug/:productSlug"
        component={SpecificProduct}
        exact
        rule={rules.READ_PRODUCT}
      />
      <Route
        path="/dashboard"
        render={({ match }) => <DashboardRoutes basePath={match.path} />}
      />
      <Route path="/unauthorized" component={NotAuthorized} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
