import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactModal from "react-modal";

import { hideDialog } from "../../store/actions/dialog";
import { DIALOG_TYPE } from "../../utils/constants";

import Button from "../Button/Button";

const UserDeclineDialog = () => {
  const {
    dialog,
    users: { list },
  } = useSelector((state) => state);

  const { userId } = dialog.dialogProps;
  const targetUser = list.find((user) => user.id === userId);

  const dispatch = useDispatch();

  const close = () => {
    dispatch(hideDialog());
  };

  const handleUserDecline = () => {
    close();
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
            Are you sure you want to delete{" "}
            <b>
              {targetUser.firstName} {targetUser.lastName}
            </b>
            ?
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
