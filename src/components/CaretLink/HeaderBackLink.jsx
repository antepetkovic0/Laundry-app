import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../styled/theme";
import Icon from "../Icon/Icon";
import CaretLink from "./CaretLink";

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
`;

const HeaderBackLink = ({ to, title, renderActionIcon }) => (
  <Container>
    <CaretLink linkTo={to} iconName="back" />
    <span>{title}</span>
    {renderActionIcon()}
  </Container>
);

HeaderBackLink.defaultProps = {
  renderActionIcon: () => <div />,
};

HeaderBackLink.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  renderActionIcon: PropTypes.func,
};

export default HeaderBackLink;
