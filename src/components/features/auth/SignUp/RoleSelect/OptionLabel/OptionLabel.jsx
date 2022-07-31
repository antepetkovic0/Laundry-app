import React from "react";
import PropTypes from "prop-types";

import { ROLES } from "../../../../../../constants/roles";
import Icon from "../../../../../core/Icon/Icon";

const OptionLabel = ({ name }) => (
  <div className="select-option">
    <Icon name={name !== ROLES.USER ? "business" : "person"} size={18} />
    <span className="select-option__label">{name}</span>
  </div>
);

OptionLabel.propTypes = {
  name: PropTypes.string.isRequired,
};

export default OptionLabel;
