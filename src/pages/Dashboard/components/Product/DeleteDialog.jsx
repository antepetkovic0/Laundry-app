import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactModal from "react-modal";

import {
  approvePendingRequest,
  declinePendingRequest,
} from "../../../../api/user";
import { hideDialog } from "../../../../store/actions/dialog";
import { DIALOG_TYPE } from "../../../../utils/constants";

import Button from "../../../../components/Button/Button";
import {
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "../../style";
import { deleteProduct } from "../../../../api/product";

const DeleteDialog = () => {
  const {
    dialog,
    dashboard: { pending },
  } = useSelector((state) => state);

  const { productId, shopId } = dialog.dialogProps;
  const dispatch = useDispatch();

  const close = () => {
    dispatch(hideDialog());
  };

  const handleDelete = () => {
    dispatch(deleteProduct(productId, shopId));
  };

  return (
    <ReactModal
      isOpen={dialog.dialogType === DIALOG_TYPE.PRODUCT_DELETE}
      onRequestClose={close}
      ariaHideApp={false}
    >
      <DialogContent>
        <DialogHeader>Delete product</DialogHeader>
        <DialogBody>
          <div style={{ textAlign: "center" }}>
            <div>
              Are you sure you want to delete
              <b>
                <span>dsa</span>
                &apos;s
              </b>{" "}
              request?
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button text="Cancel" type="subtle" onClick={close} />
          <Button text="Delete" onClick={handleDelete} />
        </DialogFooter>
      </DialogContent>
    </ReactModal>
  );
};

export default DeleteDialog;
