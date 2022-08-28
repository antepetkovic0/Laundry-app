import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactModal from "react-modal";

import { deleteProduct } from "../../../../api/products";
import { hideDialog } from "../../../../store/actions/dialog";
import { DIALOG_TYPE } from "../../../../constants/dialogType";

import Button from "../../../core/Button/Button";

const DeleteProductDialog = () => {
  const { dialogType, dialogProps } = useSelector((state) => state.dialog);
  const { productId, shopId } = dialogProps;
  const dispatch = useDispatch();

  const close = () => {
    dispatch(hideDialog());
  };

  const handleDelete = () => {
    dispatch(deleteProduct(productId, shopId));
  };

  return (
    <ReactModal
      isOpen={dialogType === DIALOG_TYPE.PRODUCT_DELETE}
      onRequestClose={close}
      ariaHideApp={false}
    >
      <div className="modal-dialog">
        <h3 className="modal-dialog__header">Delete product</h3>
        <div className="modal-dialog__body">
          Are you sure you want to delete the product?
        </div>
        <div className="modal-dialog__footer">
          <Button text="Cancel" type="subtle" onClick={close} />
          <Button text="Delete" onClick={handleDelete} />
        </div>
      </div>
    </ReactModal>
  );
};

export default DeleteProductDialog;
