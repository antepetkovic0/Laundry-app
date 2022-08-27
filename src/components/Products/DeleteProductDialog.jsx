import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactModal from "react-modal";

import { hideDialog } from "../../store/actions/dialog";
import { deleteProduct } from "../../api/products";
import { DIALOG_TYPE } from "../../utils/constants";

import Button from "../core/Button/Button";

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
          <div style={{ textAlign: "center" }}>
            <div>
              Are you sure you want to delete
              <b>product</b>?
            </div>
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

export default DeleteProductDialog;
