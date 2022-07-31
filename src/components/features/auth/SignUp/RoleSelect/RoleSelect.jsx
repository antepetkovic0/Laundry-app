import React, { useMemo } from "react";
import PropTypes from "prop-types";
import Select from "react-select";

import { ROLES, ROLE_ID } from "../../../../../constants/roles";
import OptionLabel from "./OptionLabel/OptionLabel";

const RoleSelect = ({ value, onChange }) => {
  const options = useMemo(
    () => [
      {
        value: ROLES.USER,
        roleId: ROLE_ID.USER,
        label: <OptionLabel name={ROLES.USER} />,
      },
      {
        value: ROLES.SERVICE,
        roleId: ROLE_ID.SERVICE,
        label: <OptionLabel name={ROLES.SERVICE} />,
      },
    ],
    []
  );

  return (
    <Select
      placeholder="Select role"
      options={options}
      value={value}
      onChange={onChange}
    />
  );
};

RoleSelect.defaultProps = {
  value: undefined,
};

RoleSelect.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default RoleSelect;
