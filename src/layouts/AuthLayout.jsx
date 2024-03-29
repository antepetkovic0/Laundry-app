import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import CaretBackLink from "../components/shared/navigations/CaretBackLink/CaretBackLink";

const AuthLayout = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;
  const href = pathname === "/auth/password-reset" ? "/auth/sign-in" : "/";

  return (
    <div className="auth">
      <CaretBackLink href={href} />
      <div className="auth__content">
        <div className="auth__banner" />
        <>{children}</>
      </div>
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayout;
