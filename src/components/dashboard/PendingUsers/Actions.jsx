import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { DIALOG_TYPE } from "../../../utils/constants";

import Icon from "../../Icon/Icon";

import { showDialog } from "../../../store/actions/dialog";
import { TableAction, TableActionsGroup } from "../../../pages/Dashboard/style";

const Actions = ({ userId }) => {
  const dispatch = useDispatch();

  const handleApprove = () => {
    dispatch(showDialog(DIALOG_TYPE.ADMIN_REQUEST_APPROVE, { userId }));
  };

  const handleDecline = () => {
    dispatch(showDialog(DIALOG_TYPE.ADMIN_REQUEST_DECLINE, { userId }));
  };

  return (
    <TableActionsGroup>
      <TableAction onClick={handleApprove}>
        <Icon name="done" />
      </TableAction>
      <TableAction onClick={handleDecline}>
        <Icon name="clear" />
      </TableAction>
    </TableActionsGroup>
  );
};

Actions.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default Actions;
