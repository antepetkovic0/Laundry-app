/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { checkPermission } from "./permissions";
import localStorage from "./localStorage";

const RouteAuth = ({ Component, ...props }) => {
  console.log(props);
  const { profile } = useSelector((state) => state);
  const { isAuth } = profile;
  // const isAuth = localStorage.get("isAuth");
  // const isAuth = true;
  if (!isAuth) {
    // logout();
    return <Redirect to="/auth" />;
  }

  const { permissions } = profile.Role;
  const access = checkPermission(props.rule, permissions);
  // const access = true;
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
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RouteAuth;
