import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import { theme } from "../../../styled/theme";
import Icon from "../../../components/Icon/Icon";

const Anchor = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  fill: ${theme.text.alt};
  background-color: ${theme.neutral.one};
  padding: 0.8rem;
  border-radius: 100%;
  transition: all 0.2s;

  &:hover svg {
    transform: translateX(1.2rem);
  }
`;

const iconStyle = () => `
  transition: all 0.2s;
`;

const CaretLink = ({ linkTo, iconName }) => (
  <Anchor to={linkTo}>
    <Icon name={iconName} additionalStyle={iconStyle} />
  </Anchor>
);

CaretLink.defaultProps = {
  iconName: "next",
};

CaretLink.propTypes = {
  linkTo: PropTypes.string.isRequired,
  iconName: PropTypes.string,
};

export default CaretLink;
