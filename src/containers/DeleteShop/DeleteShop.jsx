import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteShop } from "../../api/shop";
import { hideDialog } from "../../store/actions/dialog";
import { DIALOG_TYPE } from "../../utils/constants";
import DeleteShopDialog from "../../components/Dialog/DeleteShopDialog";

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
    <DeleteShopDialog
      isOpen={dialogType === DIALOG_TYPE.SHOP_DELETE}
      shopName={shop.name}
      onClose={handleClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteShop;
