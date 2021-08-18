import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { TableAction, TableActionsGroup } from "../../style";

import Icon from "../../../../components/Icon/Icon";
import { showDialog } from "../../../../store/actions/dialog";
import { DIALOG_TYPE } from "../../../../utils/constants";

const UserTableActions = ({ rowIdx }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(showDialog(DIALOG_TYPE.ADMIN_USER_DELETE));
  };
  return (
    <TableActionsGroup onClick={(e) => console.log(rowIdx)}>
      <TableAction>
        <Icon name="edit" />
      </TableAction>
      <TableAction onClick={handleDelete}>
        <Icon name="delete" />
      </TableAction>
    </TableActionsGroup>
  );
};

UserTableActions.propTypes = {
  rowIdx: PropTypes.number.isRequired,
};

export default UserTableActions;
