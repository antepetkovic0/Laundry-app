import React from "react";
import { useSelector } from "react-redux";
import { Link, useRouteMatch, useLocation } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../styled/theme";

import Icon from "../../components/Icon/Icon";
import { breakpoint } from "../../styled/breakpoint";
import { dashboardMenu, dashboardRoutes } from "./dashRoutes";

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

const Signal = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background: ${theme.error};
  top: 0.4rem;
  right: 0.4rem;
  border-radius: 100px;
`;

const DashNav = () => {
  const { path } = useRouteMatch();
  const { pathname } = useLocation();

  const { permissions } = useSelector((state) => state.profile.Role);
  const { pending } = useSelector((state) => state.dashboard);
  if (!permissions) return null;
  return (
    <Nav>
      {dashboardMenu(permissions).map((item) => (
        <Li key={item.path} to={item.path} isActive={pathname === item.path}>
          <Icon name={item.iconName} />
          {/* <span>{item.name}</span> */}
          <>
            {item.path === "/dashboard/pending" && pending.length > 0 && (
              <Signal />
            )}
          </>
        </Li>
      ))}
    </Nav>
  );

  // <Icon name="pending_actions" />
  //       {pending.length > 0 && <Signal />}
};

export default DashNav;
