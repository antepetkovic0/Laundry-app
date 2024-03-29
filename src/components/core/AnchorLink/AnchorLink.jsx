import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const Anchor = styled(Link)`
  display: inline-flex;
  color: unset;

  & > *:not(:last-child) {
    margin-right: 0.8rem;
  }
`;

const AnchorLink = ({ href, children }) => (
  <Anchor to={href}>{children}</Anchor>
);

AnchorLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AnchorLink;
