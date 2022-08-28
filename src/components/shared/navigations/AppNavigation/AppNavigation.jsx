import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

import { theme } from "../../../../styled/theme";
import Icon from "../../../core/Icon/Icon";

// eslint-disable-next-line import/no-cycle
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
  // SIDE NOTE: component AppNavigation renders before PrivateRoute
  const location = useLocation();
  const match = useRouteMatch();
  const { path } = match;
  const { pathname } = location;

  const profile = useSelector((state) => state.profile);
  const permissions = profile?.role?.permissions ?? [];
  const pendingUsers = useSelector((state) => state.dashboard.users.pending);
  const cart = useSelector((state) => state.cart);

  const navigationLinks = filterRoutesWithPermission(permissions);

  const isRouteActive = useCallback(
    (itemPath) => {
      if (!itemPath && pathname === "/app") return true;

      if (!itemPath && pathname !== "/app") return false;

      return pathname.includes(itemPath);
    },
    [pathname]
  );

  return (
    <>
      {navigationLinks.map((item) => (
        <Li
          key={item.path}
          to={`${path}${item.path}`}
          activeRoute={isRouteActive(item.path)}
        >
          <Icon name={item.iconName} />
          {item.path === "/users" && pendingUsers ? <Signal /> : null}
          {item.path === "/cart" && cart.length ? <Signal /> : null}
        </Li>
      ))}
    </>
  );
};

export default AppNavigation;
