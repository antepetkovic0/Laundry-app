import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactModal from "react-modal";

import Button from "../../../core/Button/Button";
import { hideDialog } from "../../../../store/actions/dialog";
import { DIALOG_TYPE } from "../../../../utils/constants";

const DeleteDialog = () => {
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

  const handleDelete = () => {
    // dispatch(deleteUser(userId));
    close();
  };

  if (!targetUser) return null;

  return (
    <ReactModal
      isOpen={dialog.dialogType === DIALOG_TYPE.ADMIN_USER_DELETE}
      onRequestClose={close}
      ariaHideApp={false}
    >
      <div className="modal-dialog">
        <h3 className="modal-dialog__header">Delete user</h3>
        <div className="modal-dialog__body">
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div>
              Are you sure you want to delete{" "}
              <b>
                {targetUser.firstName} {targetUser.lastName}
              </b>
              ?
            </div>
            <div>This action is irreversible.</div>
          </div>
        </div>
        <div className="modal-dialog__footer">
          <Button text="Cancel" type="subtle" onClick={close} />
          <Button text="Delete" onClick={handleDelete} />
        </div>
      </div>
    </ReactModal>
  );
};

export default DeleteDialog;
