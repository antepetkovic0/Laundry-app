import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactModal from "react-modal";

import { deleteShop } from "../../../../api/shops";
import { hideDialog } from "../../../../store/actions/dialog";
import { DIALOG_TYPE } from "../../../../utils/constants";
import Button from "../../../core/Button/Button";

const DeleteShopDialog = () => {
  const { dialogType, dialogProps } = useSelector((state) => state.dialog);
  const { list } = useSelector((state) => state.shops);

  const { shopId } = dialogProps;
  const shop = list.find((s) => s.id === shopId);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideDialog());
  };

  const handleDelete = () => {
    dispatch(deleteShop(shopId));
  };

  if (!shop) {
    return null;
  }

  return (
    <ReactModal
      isOpen={dialogType === DIALOG_TYPE.SHOP_DELETE}
      onRequestClose={handleClose}
      ariaHideApp={false}
    >
      <div className="modal-dialog">
        <h3 className="modal-dialog__header">Delete shop</h3>
        <div className="modal-dialog__body">
          Are you sure you want to delete <b>{shop.name}</b> shop?
        </div>
        <div className="modal-dialog__footer">
          <Button text="Cancel" type="subtle" onClick={handleClose} />
          <Button text="Delete" onClick={handleDelete} />
        </div>
      </div>
    </ReactModal>
  );
};

export default DeleteShopDialog;
