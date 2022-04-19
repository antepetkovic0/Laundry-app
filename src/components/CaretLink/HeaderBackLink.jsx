import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../styled/theme";
import Icon from "../Icon/Icon";

const Anchor = styled(Link)`
  fill: ${theme.text.def};
  color: ${theme.text.def};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;

  span {
    margin: 0 auto;
    font-weight: 500;
    line-height: 1.6;
    font-size: 1.6rem;
  }

  div {
    width: 24px;
  }
`;

const HeaderBackLink = ({ to, title }) => (
  <Anchor to={to}>
    <Container>
      <Icon name="back" />
      <span>{title}</span>
      <div />
    </Container>
  </Anchor>
);

HeaderBackLink.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default HeaderBackLink;
