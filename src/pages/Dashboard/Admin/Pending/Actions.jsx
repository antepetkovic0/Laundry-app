import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { showDialog } from "../../../../store/actions/dialog";
import { DIALOG_TYPE } from "../../../../utils/constants";

import Icon from "../../../../components/Icon/Icon";

import { TableAction, TableActionsGroup } from "../../style";

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
