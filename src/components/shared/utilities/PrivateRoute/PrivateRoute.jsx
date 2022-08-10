/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { checkUserHavePermission } from "../../../../utils/permissions";

const PrivateRoute = ({ component: Component, rule, ...props }) => {
  const profile = useSelector((state) => state.profile);
  const { isAuth, role } = profile;

  if (!isAuth) {
    return <Redirect to="/auth/sign-in" />;
  }

  const { permissions } = role;
  const haveAccess = checkUserHavePermission(rule, permissions);

  if (isAuth && !haveAccess) {
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
