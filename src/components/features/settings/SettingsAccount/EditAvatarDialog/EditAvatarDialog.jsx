import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactModal from "react-modal";

import { DIALOG_TYPE } from "../../../../../utils/constants";
import { hideDialog } from "../../../../../store/actions/dialog";
import { useInput } from "../../../../../hooks/useInput";
import Button from "../../../../core/Button/Button";
import InputField from "../../../../shared/fields/InputField/InputField";

const EditAvatarDialog = () => {
  const dialog = useSelector((state) => state.dialog);
  const { avatarUrl } = dialog.dialogProps;
  const [input, { handleInputChange }] = useInput(avatarUrl);
  const dispatch = useDispatch();

  // TODO: api call
  const close = () => {
    dispatch(hideDialog());
  };

  const handleChangeAvatar = () => {
    close();
  };

  return (
    <ReactModal
      isOpen={dialog.dialogType === DIALOG_TYPE.AVATAR_EDIT}
      onRequestClose={close}
      ariaHideApp={false}
    >
      <div className="modal-dialog">
        <h3 className="modal-dialog__header">Change user avatar</h3>
        <div className="modal-dialog__body">
          <InputField
            name="avatar"
            type="text"
            label="Avatar"
            value={input}
            onChange={handleInputChange}
          />
        </div>
        <div className="modal-dialog__footer">
          <Button text="Cancel" type="subtle" onClick={close} />
          <Button text="Save" onClick={handleChangeAvatar} />
        </div>
      </div>
    </ReactModal>
  );
};

export default EditAvatarDialog;
