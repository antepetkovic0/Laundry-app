/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { checkPermission } from "../../../../utils/permissions";

const PrivateRoute = ({ component: Component, rule, ...props }) => {
  const isAuth = useSelector((state) => state.profile.isAuth);
  const role = useSelector((state) => state.profile.role);

  if (!isAuth) {
    return <Redirect to="/auth/sign-in" />;
  }

  const { permissions } = role;
  const access = checkPermission(rule, permissions);

  if (isAuth && !access) {
    return <Redirect to="/unauthorized" />;
  }

  return (
    <Route
      {...props}
      render={(routeProps) => (
        <Component {...routeProps} roleTitle={role.title} />
      )}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  rule: PropTypes.string.isRequired,
};

export default PrivateRoute;
