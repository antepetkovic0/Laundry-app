/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import Dashboard from "./pages/Dashboard/Dashboard";
import NotAuthorized from "./pages/Error/NotAuthorized";
import NotFound from "./pages/Error/NotFound";

import RouteAuth from "./utils/routeAuth";
import { rules } from "./utils/permissions";
import "./modal.css";
import { dashboardRoutes } from "./pages/Dashboard/dashRoutes";
import AuthLayout from "./layouts/AuthLayout";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";

const withAuthLayout = (Component) => (props) => (
  <AuthLayout>
    {/* All props are passed through to the Component being wrapped */}
    <Component {...props} /> /
  </AuthLayout>
);

const SignInPage = withAuthLayout(SignIn);
const SignUpPage = withAuthLayout(SignUp);
const ForgotPasswordPage = withAuthLayout(ForgotPassword);

const App = () => (
  <Router>
    <ToastContainer />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/sign-in" component={SignInPage} />
      <Route path="/sign-up" component={SignUpPage} />
      <Route path="/password-forgot" component={ForgotPasswordPage} />
      {/* {dashboardRoutes.map((item) => (
        <RouteAuth
          path={item.path}
          component={item.component}
          // exact
          rule={item.rule}
          exact={item.exact}
        />
      ))} */}
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
