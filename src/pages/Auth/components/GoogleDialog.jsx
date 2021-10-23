import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactModal from "react-modal";
import {
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "../../Dashboard/style";
import { DIALOG_TYPE, SWITCH_TYPE } from "../../../utils/constants";
import Button from "../../../components/Button/Button";
import { hideDialog } from "../../../store/actions/dialog";
import Switcher from "../../../components/Switcher/Switcher";
import Icon from "../../../components/Icon/Icon";
import { roleOptions } from "../../../components/Switcher/switcherOptions";
import { googleAuth } from "../../../api/auth";

const GoogleDialog = () => {
  const { dialog, switchGoogleAuth } = useSelector((state) => state);
  const { googleCredential } = dialog.dialogProps;

  const dispatch = useDispatch();

  const close = () => {
    dispatch(hideDialog());
  };

  const handleAuth = async () => {
    await googleAuth({
      roleId: !switchGoogleAuth ? 2 : 3,
      token: googleCredential,
    });
    close();
  };

  return (
    <ReactModal
      isOpen={dialog.dialogType === DIALOG_TYPE.GOOGLE_AUTH}
      onRequestClose={close}
      ariaHideApp={false}
    >
      <DialogContent>
        <DialogHeader
          style={{
            display: "flex",
            gap: "25px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon
            name="business"
            size={30}
            additionalStyle={() => `transform: rotate(340deg)`}
          />
          Choose role
          <Icon
            name="person"
            size={30}
            additionalStyle={() => `transform: rotate(20deg)`}
          />
        </DialogHeader>
        <DialogBody>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div>Continue as</div>
            <Switcher
              type={SWITCH_TYPE.GOOGLE_AUTH_ROLE}
              options={roleOptions}
            />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button text="Cancel" type="subtle" onClick={close} />
          <Button text="Continue" onClick={handleAuth} />
        </DialogFooter>
      </DialogContent>
    </ReactModal>
  );
};

export default GoogleDialog;
