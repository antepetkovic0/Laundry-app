import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import SignIn from "../components/authComponents/SignIn";
import SignUp from "../components/authComponents/SignUp";
import ForgotPassword from "../components/authComponents/ForgotPassword";

// !!! LAYOUTS TECHNIQUES !!!
// https://medium.com/swlh/creating-effective-layouts-with-react-router-6847f6eaffc
// nested routes solves the problem of component mounting before layout and reconciliation

const AuthRoutes = ({ basePath }) => (
  <AuthLayout>
    <Switch>
      <Route path={`${basePath}/sign-in`} component={SignIn} exact />
      <Route path={`${basePath}/sign-up`} component={SignUp} exact />
      <Route
        path={`${basePath}/password-reset`}
        component={ForgotPassword}
        exact
      />
      <Route component={() => <div>Nothing here</div>} />
    </Switch>
  </AuthLayout>
);

AuthRoutes.propTypes = {
  basePath: PropTypes.string.isRequired,
};

export default AuthRoutes;
