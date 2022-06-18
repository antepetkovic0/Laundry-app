import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactModal from "react-modal";

import { deleteShop } from "../../api/shop";
import { hideDialog } from "../../store/actions/dialog";
import { DIALOG_TYPE } from "../../utils/constants";
import Button from "../Button/Button";

const DeleteShop = () => {
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
        <div className="modal-dialog__header">Delete shop</div>
        <div className="modal-dialog__body">
          <div>
            <div>
              Are you sure you want to delete{" "}
              <b>
                <span>{shop.name}</span>
              </b>{" "}
              shop?
            </div>
          </div>
        </div>
        <div className="modal-dialog__footer">
          <Button text="Cancel" type="subtle" onClick={handleClose} />
          <Button text="Delete" onClick={handleDelete} />
        </div>
      </div>
    </ReactModal>
  );
};

export default DeleteShop;
