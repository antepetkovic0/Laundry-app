import React from "react";
import PropTypes from "prop-types";
import AppNavigation from "../components/shared/navigations/MainNavigation/AppNavigation";

const AppLayout = ({ children }) => (
  <div className="app">
    <nav className="app__navigation">
      <AppNavigation />
    </nav>
    <div className="app__content">{children}</div>
  </div>
);

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
