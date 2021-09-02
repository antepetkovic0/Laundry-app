import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactModal from "react-modal";

import {
  approvePendingRegistration,
  declinePendingRegistration,
} from "../../../../api/pending_request";
import { hideDialog } from "../../../../store/actions/dialog";
import { DIALOG_TYPE } from "../../../../utils/constants";

import Button from "../../../../components/Button/Button";

import {
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "../../style";

const Dialog = () => {
  const {
    dialog,
    dashboard: { pending },
  } = useSelector((state) => state);
  const { userId } = dialog.dialogProps;
  const targetUser = pending.find((user) => user.id === userId);

  const dispatch = useDispatch();

  const close = () => {
    dispatch(hideDialog());
  };

  const handleDecline = () => {
    dispatch(declinePendingRegistration(targetUser.hash, targetUser.id));
  };

  const handleApprove = () => {
    dispatch(approvePendingRegistration(targetUser.hash, targetUser.id));
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
                <span>{targetUser.name}</span>&apos;s
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
