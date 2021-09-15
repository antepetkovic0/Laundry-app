/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../styled/theme";
import Icon from "../Icon/Icon";

const Box = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;

  span {
    margin-left: 0.5rem;
    font-weight: 500;
  }
`;

const LinkStyled = styled(Link)`
  fill: ${theme.text.def};
  color: ${theme.text.def};
`;

const Back = ({ to, title }) => (
  <LinkStyled to={to}>
    <Box>
      <Icon name="back" />
      <span>{title}</span>
    </Box>
  </LinkStyled>
);

export default Back;
