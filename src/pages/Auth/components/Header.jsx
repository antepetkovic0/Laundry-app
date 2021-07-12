import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import Icon from "../../../components/Icon/Icon";

import { theme } from "../../../styled/theme";

const Wrapper = styled.div`
  width: -webkit-fill-available;
  height: 38px;
  display: flex;
  padding: 0.5rem 1rem;
  font-size: 1.6rem;
  font-weight: 500;
`;

const Back = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 0.5rem;
  }
`;

const LinkStyled = styled(Link)`
  fill: ${theme.text.def};
  color: ${theme.text.def};

  &:hover {
    fill: ${theme.primary.def};
    color: ${theme.primary.def};
  }
`;

const Header = () => {
  const location = useLocation();

  const getPath = (isAuthLocation) => {
    const urlTo =
      isAuthLocation !== "/auth"
        ? {
            pathname: "/auth",
            state: { isSignup: false },
          }
        : "/";
    return urlTo;
  };

  return (
    <Wrapper>
      <LinkStyled to={getPath(location.pathname)}>
        <Back>
          <Icon name="back" />
          <span>Back</span>
        </Back>
      </LinkStyled>
    </Wrapper>
  );
};

export default Header;
