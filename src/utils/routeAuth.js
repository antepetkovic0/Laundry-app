/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { verifyAuth } from "../api/auth";

const checkIfVerified = (res) => {};

// eslint-disable-next-line react/prop-types
const RouteAuth = ({ Component, ...props }) => {
  // const { isAuth, roleId } = useSelector((state) => state.profile);
  // const auth = checkAuth();
  // const { data } = await verifyAuth({ roles: props.roles });

  // let role = getUserRole(),
  //   access = checkAccess(role, props.roles);
  // const access = props.roles.includes(roleId);
  const isAuth = true;
  const access = true;

  if (!isAuth) {
    // logout();
    return <Redirect to="/auth" />;
  }

  if (isAuth && !access) {
    return <Redirect to="/error/401" />;
  }

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Route {...props} render={(routeProps) => <Component {...routeProps} />} />
  );
};

// RouteAuth.defaultProps = {
//   roles: [],
// };

RouteAuth.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default RouteAuth;
