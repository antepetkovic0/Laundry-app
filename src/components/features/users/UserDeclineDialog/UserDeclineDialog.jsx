import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactModal from "react-modal";

import Button from "../../../core/Button/Button";
import { deleteUser } from "../../../../api/users";
import { hideDialog } from "../../../../store/actions/dialog";
import { DECLINE_USER } from "../../../../store/actions/dashboard";
import { DIALOG_TYPE } from "../../../../utils/constants";

const UserDeclineDialog = () => {
  const dialog = useSelector((state) => state.dialog);
  const users = useSelector((state) => state.users.list);

  const { userId } = dialog.dialogProps;
  const targetUser = users.find((user) => user.id === userId);

  const dispatch = useDispatch();

  const close = () => {
    dispatch(hideDialog());
  };

  const handleUserDecline = () => {
    dispatch(deleteUser(DECLINE_USER, userId));
  };

  if (!targetUser) return null;

  return (
    <ReactModal
      isOpen={dialog.dialogType === DIALOG_TYPE.ADMIN_REQUEST_DECLINE}
      onRequestClose={close}
      ariaHideApp={false}
    >
      <div className="modal-dialog">
        <h3 className="modal-dialog__header">Decline user request</h3>
        <div className="modal-dialog__body">
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            Are you sure you want to decline{" "}
            <b>
              {targetUser.firstName} {targetUser.lastName}
            </b>{" "}
            request?
          </div>
        </div>
        <div className="modal-dialog__footer">
          <Button text="Cancel" type="subtle" onClick={close} />
          <Button text="Decline" onClick={handleUserDecline} />
        </div>
      </div>
    </ReactModal>
  );
};

export default UserDeclineDialog;
