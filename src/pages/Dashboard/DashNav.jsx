import React from "react";
import { Link, useRouteMatch, useLocation } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../styled/theme";

import Icon from "../../components/Icon/Icon";
import { breakpoint } from "../../styled/breakpoint";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  padding: 0.5rem;
  background-color: ${theme.bg.def};
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.05);
  overflow-x: auto;

  @media ${breakpoint.tablet} {
    flex-direction: column;
    width: fit-content;
    overflow-y: auto;
  }
`;

const Li = styled(Link)`
  flex-shrink: 0;
  font-weight: 500;
  display: flex;
  align-items: center;
  color: ${theme.text.alt};
  fill: ${theme.text.alt};
  transition: all 0.2s ease-in;
  padding: 0.8rem;
  border-radius: 8px;
  position: relative;

  ${({ isActive }) =>
    isActive &&
    `
      color: ${theme.primary.def};
      fill: ${theme.primary.def};

      &::after {
      content: "";
      position: absolute;
      top: -0.5rem;
      left: 50%;
      transform: translateX(-50%);
      width: 1rem;
      height: 0.5rem;
      background-color: ${theme.primary.def};
      border-bottom-right-radius: 100px;
      border-bottom-left-radius: 100px;
      border-top-left-radius: 0;

      @media ${breakpoint.tablet} {
        width: 0.5rem;
        height: 1rem;
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-top-left-radius: 100px;
        border-bottom-left-radius: 100px;
        border-bottom-right-radius: 0;
      }
    }
  `}

  &:hover {
    background-color: ${theme.neutral.one};
  }

  &:not(:last-child) {
    margin-right: 0.5rem;
    @media ${breakpoint.tablet} {
      margin-bottom: 0.5rem;
      margin-right: 0;
    }
  }

  @media ${breakpoint.tablet} {
    &:nth-last-child(3) {
      margin-bottom: auto;
    }
  }

  span {
    margin-left: 0.5rem;
  }
`;

const DashNav = () => {
  const { path } = useRouteMatch();
  const { pathname } = useLocation();

  return (
    <Nav>
      <Li to={path} isActive={pathname === "/dashboard/admin"}>
        <Icon name="dashboard" />
        {/* <span>Dashboard</span> */}
      </Li>
      <Li to={`${path}/users`} isActive={pathname === "/dashboard/admin/users"}>
        <Icon name="groups" />
        {/* <span>Users</span> */}
      </Li>
      <Li
        to="/dashboard/admin/services"
        isActive={pathname === "/dashboard/admin/services"}
      >
        <Icon name="business" />
        {/* <span>Services</span> */}
      </Li>
      <Li
        to="/dashboard/admin/pending"
        isActive={pathname === "/dashboard/admin/pending"}
      >
        <Icon name="pending_actions" />
        {/* <span>Pending registrations</span> */}
      </Li>
      <Li
        to="/dashboard/admin/orders"
        isActive={pathname === "/dashboard/admin/orders"}
      >
        <Icon name="shopping_cart" />
        {/* <span>Orders</span> */}
      </Li>
      <Li
        to="/dashboard/admin/stats"
        isActive={pathname === "/dashboard/admin/stats"}
      >
        <Icon name="leaderboard" />
        {/* <span>Stats</span> */}
      </Li>
      <Li
        to="/dashboard/admin/settings"
        isActive={pathname === "/dashboard/admin/settings"}
      >
        <Icon name="settings" />
        {/* <span>Settings</span> */}
      </Li>
      <Li
        to="/dashboard/admin/logout"
        isActive={pathname === "/dashboard/admin/logout"}
      >
        <Icon name="logout" />
        {/* <span>Logout</span> */}
      </Li>
    </Nav>
  );
};

export default DashNav;
