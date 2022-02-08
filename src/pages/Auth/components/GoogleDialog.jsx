import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ReactModal from "react-modal";
import {
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "../../Dashboard/style";
import { hideDialog } from "../../../store/actions/dialog";
import { googleAuth } from "../../../api/auth";
import { roleOptions } from "../../../components/Switcher/switcherOptions";
import Button from "../../../components/Button/Button";
import Switcher from "../../../components/Switcher/Switcher";
import Icon from "../../../components/Icon/Icon";
import { DIALOG_TYPE, SWITCH_TYPE, TOAST_TYPE } from "../../../utils/constants";
import { toastMessage } from "../../../utils/toast";

const GoogleDialog = () => {
  const { dialog, switchGoogleAuth } = useSelector((state) => state);
  const { googleCredential } = dialog.dialogProps;

  const history = useHistory();
  const dispatch = useDispatch();

  const close = () => {
    dispatch(hideDialog());
  };

  const handleAuth = async () => {
    try {
      const { data } = await googleAuth({
        roleId: !switchGoogleAuth ? 2 : 3,
        token: googleCredential,
      });
      if (data.message) {
        toastMessage(data.message, TOAST_TYPE.SUCCESS);
      } else {
        history.push(`/dashboard`);
      }
    } catch (err) {
      console.log(err);
      toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
    }
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
