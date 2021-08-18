import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactModal from "react-modal";

import { hideDialog } from "../../../../store/actions/dialog";
import { DIALOG_TYPE } from "../../../../utils/constants";
import {
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "../../style";
import Button from "../../../../components/Button/Button";

const DeleteDialog = () => {
  const { dialog } = useSelector((state) => state);

  const dispatch = useDispatch();

  const close = () => {
    dispatch(hideDialog());
  };

  return (
    <ReactModal
      isOpen={dialog.dialogType === DIALOG_TYPE.ADMIN_USER_DELETE}
      onRequestClose={close}
      ariaHideApp={false}
    >
      <DialogContent>
        <DialogHeader>Delete user</DialogHeader>
        <DialogBody>dlslds</DialogBody>
        <DialogFooter>
          <Button text="Cancel" type="subtle" onClick={close} />
          <Button text="Delete" />
        </DialogFooter>
      </DialogContent>
    </ReactModal>
  );
};

export default DeleteDialog;
