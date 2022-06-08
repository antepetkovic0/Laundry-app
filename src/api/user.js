import axios from "axios";
import {
  deleteDashboardData,
  // setDashboardData,
} from "../store/actions/dashboard";
import { setUIError, startUILoader, stopUILoader } from "../store/actions/ui";
import { getUsersData } from "../store/actions/users";
import { TOAST_TYPE } from "../utils/constants";
import { toastMessage } from "../utils/toast";
import { httpClient } from "./client";

export const fetchUsers = (actionName) => async (dispatch) => {
  try {
    dispatch(startUILoader(actionName));
    const { data } = await httpClient.get("/users");
    dispatch(getUsersData(data));
  } catch (err) {
    console.log("we are in err", err.response);
    dispatch(setUIError(actionName));
  } finally {
    dispatch(stopUILoader(actionName));
  }
};

export const approvePendingRequest = (id) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${URL}/pending`, {
      hash: id,
    });
    dispatch(deleteDashboardData(id, "pending"));
    // dispatch(setDashboardData([data], "users"));
  } catch (err) {
    toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
  }
};

export const declinePendingRequest = (id) => async (dispatch) => {
  try {
    await axios.delete(`${URL}/pending/${id}`);
    dispatch(deleteDashboardData(id, "pending"));
  } catch (err) {
    if (err.response?.data?.authenticationErr) {
      dispatch({ type: "LOG_OFF" });
    } else {
      toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
    }
  }
};
