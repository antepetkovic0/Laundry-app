import { dialogType } from "../../utils/constants";

export const SHOW_DIALOG = "SHOW_DIALOG";
export const HIDE_DIALOG = "HIDE_DIALOG";

export const showForgotPassDialog = () => ({
  type: SHOW_DIALOG,
  payload: {
    dialogType: dialogType.FORGOT_PASS,
    dialogProps: {},
  },
});