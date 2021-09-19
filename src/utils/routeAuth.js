/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { checkPermission } from "./permissions";

const RouteAuth = ({ Component, ...props }) => {
  const { profile } = useSelector((state) => state);
  const { isAuth } = profile;

  if (!isAuth) {
    return <Redirect to="/auth" />;
  }

  const { permissions } = profile.Role;
  const access = checkPermission(props.rule, permissions);

  if (isAuth && !access) {
    return <Redirect to="/unauthorized" />;
  }

  return (
    <Route {...props} render={(routeProps) => <Component {...routeProps} />} />
  );
};

RouteAuth.defaultProps = {
  rule: "",
};

RouteAuth.propTypes = {
  Component: PropTypes.node.isRequired,
  rule: PropTypes.string,
};

export default RouteAuth;
