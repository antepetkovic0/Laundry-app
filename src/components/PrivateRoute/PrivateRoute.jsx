/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { checkPermission } from "../../utils/permissions";

const PrivateRoute = ({ component: Component, rule, ...props }) => {
  const { profile } = useSelector((state) => state);
  const { isAuth } = profile;

  if (!isAuth) {
    return <Redirect to="/auth/sign-in" />;
  }

  const { permissions } = profile.Role;
  const access = checkPermission(rule, permissions);

  if (isAuth && !access) {
    return <Redirect to="/unauthorized" />;
  }

  return (
    <Route {...props} render={(routeProps) => <Component {...routeProps} />} />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  rule: PropTypes.string.isRequired,
};

export default PrivateRoute;
