import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { dashboardRoutePath } from "../../../constants/routePaths";

import { breakpoint } from "../../../styled/breakpoint";
import { theme } from "../../../styled/theme";

import Icon from "../../Icon/Icon";
import { getDashboardLinksByRole } from "./dashboardLinks";

const Nav = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  background-color: ${theme.bg.def};
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.15);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  @media ${breakpoint.tablet} {
    flex-direction: column;
    height: 100%;
    width: fit-content;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
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

const DashboardNavigation = () => {
  const location = useLocation();
  const { pathname } = location;
  console.log(location);

  const { permissions } = useSelector((state) => state.profile.Role);
  const { pending } = useSelector((state) => state.dashboard);

  const navigationLinks = getDashboardLinksByRole(permissions);

  return (
    <Nav>
      {navigationLinks.map((item) => (
        <Li
          key={item.path}
          to={item.path}
          isActive={pathname === `/dashboard/${item.path}`}
        >
          <Icon name={item.iconName} />
          {/* <span>{item.name}</span> */}
          {item.path ===
            `/dashboard/${dashboardRoutePath.PENDING_REGISTRATIONS}` &&
            pending.length > 0 && <Signal />}
        </Li>
      ))}
    </Nav>
  );
};

export default DashboardNavigation;
