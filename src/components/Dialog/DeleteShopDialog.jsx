import React from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";
import Button from "../Button/Button";
import {
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "./styled";

const DeleteShopDialog = ({ shopName, isOpen, onClose, onSubmit }) => (
  <ReactModal isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false}>
    <DialogContent>
      <DialogHeader>Delete shop</DialogHeader>
      <DialogBody>
        <div>
          <div>
            Are you sure you want to delete{" "}
            <b>
              <span>{shopName}</span>
            </b>{" "}
            shop?
          </div>
        </div>
      </DialogBody>
      <DialogFooter>
        <Button text="Cancel" type="subtle" onClick={onClose} />
        <Button text="Delete" onClick={onSubmit} />
      </DialogFooter>
    </DialogContent>
  </ReactModal>
);

DeleteShopDialog.propTypes = {
  shopName: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default DeleteShopDialog;
