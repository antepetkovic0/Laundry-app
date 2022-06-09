import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactModal from "react-modal";

import { hideDialog } from "../../store/actions/dialog";
import { DIALOG_TYPE } from "../../utils/constants";

import Button from "../Button/Button";

const UserApproveDialog = () => {
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

  const handleUserApprove = () => {
    close();
  };

  if (!targetUser) return null;

  return (
    <ReactModal
      isOpen={dialog.dialogType === DIALOG_TYPE.ADMIN_REQUEST_APPROVE}
      onRequestClose={close}
      ariaHideApp={false}
    >
      <div className="modal-dialog">
        <h3 className="modal-dialog__header">Approve user</h3>
        <div className="modal-dialog__body">
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            Are you sure you want to approve{" "}
            <b>
              {targetUser.firstName} {targetUser.lastName}
            </b>
            ?
          </div>
        </div>
        <div className="modal-dialog__footer">
          <Button text="Cancel" type="subtle" onClick={close} />
          <Button text="Approve" onClick={handleUserApprove} />
        </div>
      </div>
    </ReactModal>
  );
};

export default UserApproveDialog;
