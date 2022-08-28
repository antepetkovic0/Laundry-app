import * as uiActions from "../store/actions/ui";
import * as userActions from "../store/actions/users";
import * as dialogActions from "../store/actions/dialog";
import { TOAST_TYPE } from "../constants/toastType";
import { toastMessage } from "../utils/toast";
import { httpClient } from "./client";

export const fetchUsers = (actionName) => async (dispatch) => {
  try {
    dispatch(uiActions.startUILoader(actionName));
    const { data } = await httpClient.get("/users");
    dispatch(userActions.getUsersData(data));
  } catch (err) {
    dispatch(uiActions.setUIError(actionName));
  } finally {
    dispatch(uiActions.stopUILoader(actionName));
  }
};

export const approveUser = (id) => async (dispatch) => {
  try {
    await httpClient.post("users/pending", { hash: id });
    dispatch(userActions.approveUser(id));
    toastMessage(
      "User account has been successfully activated.",
      TOAST_TYPE.SUCCESS
    );
    dispatch(dialogActions.hideDialog());
  } catch (err) {
    toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
  }
};

export const deleteUser = (type, id) => async (dispatch) => {
  try {
    await httpClient.delete(`users/${id}`);
    dispatch(userActions.deleteOrDeclineUser(type, id));
    toastMessage(
      "User account has been successfully deleted.",
      TOAST_TYPE.SUCCESS
    );
    dispatch(dialogActions.hideDialog());
  } catch (err) {
    toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
  }
};
