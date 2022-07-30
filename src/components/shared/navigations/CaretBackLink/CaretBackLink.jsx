import React from "react";
import PropTypes from "prop-types";

import AnchorLink from "../../../core/AnchorLink/AnchorLink";
import Icon from "../../../core/Icon/Icon";

const CaretBackLink = ({ href }) => (
  <AnchorLink href={href}>
    <Icon name="back" />
  </AnchorLink>
);

CaretBackLink.propTypes = {
  href: PropTypes.string.isRequired,
};

export default CaretBackLink;
