import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

import { dashboardRoutePath } from "../../../../constants/routePaths";
import { theme } from "../../../../styled/theme";
import Icon from "../../../core/Icon/Icon";

import { filterRoutesWithPermission } from "./filterRoutesWithPermission";

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

  ${({ activeRoute }) =>
    activeRoute &&
    `
      color: ${theme.primary.def};
      fill: ${theme.primary.def};
      background-color: ${theme.neutral.one};

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
    }
  `}

  &:hover {
    background-color: ${theme.neutral.one};
  }

  &:not(:last-child) {
    margin-right: 0.5rem;
  }

  span {
    margin-left: 0.5rem;
  }
`;

const Signal = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background: ${theme.error};
  top: 0.4rem;
  right: 0.4rem;
  border-radius: 100px;
`;

const AppNavigation = () => {
  const location = useLocation();
  const match = useRouteMatch();
  const { path } = match;
  const { pathname } = location;
  console.log(path, pathname);

  const { permissions } = useSelector((state) => state.profile.role);

  const users = useSelector((state) => state.users.list);
  const someUserPending = users?.some((user) => user.status === "PENDING");

  const navigationLinks = filterRoutesWithPermission(permissions);

  return (
    <>
      {navigationLinks.map((item) => (
        <Li
          key={item.path}
          to={`${path}${item.path}`}
          activeRoute={pathname === item.path}
        >
          <Icon name={item.iconName} />
          {item.path === "/users" && someUserPending ? <Signal /> : null}
        </Li>
      ))}
    </>
  );
};

export default AppNavigation;
