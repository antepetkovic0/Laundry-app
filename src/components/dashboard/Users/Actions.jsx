import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { showDialog } from "../../../store/actions/dialog";
import { DIALOG_TYPE } from "../../../utils/constants";

import Icon from "../../Icon/Icon";

import { TableAction, TableActionsGroup } from "../../../pages/Dashboard/style";

const Actions = ({ userId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(showDialog(DIALOG_TYPE.ADMIN_USER_DELETE, { userId }));
  };

  return (
    <TableActionsGroup>
      <TableAction>
        <Icon name="edit" />
      </TableAction>
      <TableAction onClick={handleDelete}>
        <Icon name="delete" />
      </TableAction>
    </TableActionsGroup>
  );
};

Actions.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default Actions;
