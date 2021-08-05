import React from "react";
import { Route, Redirect } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const RouteAuth = ({ Component, ...props }) => {
  // const auth = checkAuth();
  const auth = true;

  // let role = getUserRole(),
  //   access = checkAccess(role, props.roles);
  const access = true;

  if (!auth) {
    // logout();
  } else if (auth && !access) {
    return <Redirect to="/error/401" />;
  }

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Route {...props} render={(routeProps) => <Component {...routeProps} />} />
  );
};

export default RouteAuth;
