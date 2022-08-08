import React from "react";
import PropTypes from "prop-types";

import AnchorLink from "../../../core/AnchorLink/AnchorLink";
import Icon from "../../../core/Icon/Icon";

const CaretBackLink = ({ href, title }) => (
  <AnchorLink href={href}>
    <Icon name="back" />
    {title && <h3>{title}</h3>}
  </AnchorLink>
);

CaretBackLink.defaultProps = {
  title: "",
};

CaretBackLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default CaretBackLink;
