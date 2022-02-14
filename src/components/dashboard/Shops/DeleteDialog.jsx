import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactModal from "react-modal";

import { deleteShop } from "../../../api/shop";
import { hideDialog } from "../../../store/actions/dialog";
import { DIALOG_TYPE } from "../../../utils/constants";
import Button from "../../Button/Button";
import {
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "../../../pages/Dashboard/style";

const DeleteDialog = () => {
  const {
    dialog,
    dashboard: { shops },
  } = useSelector((state) => state);

  const { shopId } = dialog.dialogProps;
  const shop = shops.find((s) => s.id === shopId);

  const dispatch = useDispatch();

  const close = () => {
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
      isOpen={dialog.dialogType === DIALOG_TYPE.SHOP_DELETE}
      onRequestClose={close}
      ariaHideApp={false}
    >
      <DialogContent>
        <DialogHeader>Delete shop</DialogHeader>
        <DialogBody>
          <div style={{ textAlign: "center" }}>
            <div>
              Are you sure you want to delete{" "}
              <b>
                <span>{shop.name}</span>
              </b>{" "}
              shop?
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
