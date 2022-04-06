import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactModal from "react-modal";

import {
  approvePendingRequest,
  declinePendingRequest,
} from "../../../api/user";
import { hideDialog } from "../../../store/actions/dialog";
import { DIALOG_TYPE } from "../../../utils/constants";

import Button from "../../Button/Button";
import {
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "../../../pages/Dashboard/style";

const Dialog = () => {
  const {
    dialog,
    pending: { list },
  } = useSelector((state) => state);

  const { userId } = dialog.dialogProps;
  const targetUser = list.find((user) => user.id === userId);
  const dispatch = useDispatch();

  const close = () => {
    dispatch(hideDialog());
  };

  const handleDecline = () => {
    dispatch(declinePendingRequest(targetUser.id));
  };

  const handleApprove = () => {
    dispatch(approvePendingRequest(targetUser.id));
  };

  const generateTitle = () => {
    if (dialog.dialogType === DIALOG_TYPE.ADMIN_REQUEST_APPROVE) {
      return "Approve request";
    }
    return "Decline request";
  };

  if (!targetUser) return null;

  return (
    <ReactModal
      isOpen={
        dialog.dialogType === DIALOG_TYPE.ADMIN_REQUEST_APPROVE ||
        DIALOG_TYPE.ADMIN_REQUEST_DECLINE
      }
      onRequestClose={close}
      ariaHideApp={false}
    >
      <DialogContent>
        <DialogHeader>{generateTitle()}</DialogHeader>
        <DialogBody>
          <div style={{ textAlign: "center" }}>
            <div>
              Are you sure you want to{" "}
              <span>
                {dialog.dialogType !== DIALOG_TYPE.ADMIN_REQUEST_APPROVE
                  ? "decline"
                  : "approve"}
              </span>{" "}
              <b>
                <span>{`${targetUser.firstName} ${targetUser.lastName}`}</span>
                &apos;s
              </b>{" "}
              request?
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button text="Cancel" type="subtle" onClick={close} />
          {dialog.dialogType !== DIALOG_TYPE.ADMIN_REQUEST_APPROVE ? (
            <Button text="Decline" onClick={handleDecline} />
          ) : (
            <Button text="Approve" onClick={handleApprove} />
          )}
        </DialogFooter>
      </DialogContent>
    </ReactModal>
  );
};

export default Dialog;
