import React from "react";
import { useSelector } from "react-redux";
import { useRouteMatch, useLocation } from "react-router-dom";

import Icon from "../../../components/Icon/Icon";

import { Nav, Li } from "../style";

const DashNav = () => {
  const { path } = useRouteMatch();
  const { pathname } = useLocation();

  return (
    <Nav>
      <Li to={path} isActive={pathname === "/dashboard/service"}>
        <Icon name="dashboard" />
        {/* <span>Dashboard</span> */}
      </Li>
      <Li
        to="/dashboard/service/shops"
        isActive={pathname === "/dashboard/service/shops"}
      >
        <Icon name="business" />
        {/* <span>Services</span> */}
      </Li>
      <Li
        to={`${path}/calendar`}
        isActive={pathname === "/dashboard/service/calendar"}
      >
        <Icon name="calendar_today" />
        {/* <span>Users</span> */}
      </Li>
      <Li
        to="/dashboard/service/orders"
        isActive={pathname === "/dashboard/service/orders"}
      >
        <Icon name="shopping_cart" />
        {/* <span>Orders</span> */}
      </Li>
      <Li
        to="/dashboard/service/stats"
        isActive={pathname === "/dashboard/service/stats"}
      >
        <Icon name="leaderboard" />
        {/* <span>Stats</span> */}
      </Li>
      <Li
        to="/dashboard/service/settings"
        isActive={pathname === "/dashboard/service/settings"}
      >
        <Icon name="settings" />
        {/* <span>Settings</span> */}
      </Li>
      <Li
        to="/dashboard/service/logout"
        isActive={pathname === "/dashboard/service/logout"}
      >
        <Icon name="logout" />
        {/* <span>Logout</span> */}
      </Li>
    </Nav>
  );
};

export default DashNav;
