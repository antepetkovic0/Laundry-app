import axios from "axios";
import {
  deleteDashboardData,
  setDashboardData,
} from "../store/actions/dashboard";
import { getUsers, setUsersData } from "../store/actions/users";
import { TOAST_TYPE } from "../utils/constants";
import { toastMessage } from "../utils/toast";
import { httpClient } from "./client";

export const fetchUsers = () => async (dispatch) => {
  dispatch(getUsers());
  try {
    const { data } = await httpClient.get("/users");
    dispatch(setUsersData(data));
  } catch (err) {
    console.log("we are in err");
    // if (err.response.data.authenticationErr) {
    //   dispatch(logoutUser());
    // }
    // dispatch(setShopsError(err.response.data.authenticationErr));
    // toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
  }
};

// export const getUsers = () => async (dispatch) => {
//   try {
//     const { data } = await axios.get(`${URL}`);
//     dispatch(setDashboardData(data, "users"));
//   } catch (err) {
//     toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
//   }
// };

export const getPendingRequests = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/pending`);
    dispatch(setDashboardData(data, "pending"));
  } catch (err) {
    toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
  }
};

export const approvePendingRequest = (id) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${URL}/pending`, {
      hash: id,
    });
    dispatch(deleteDashboardData(id, "pending"));
    dispatch(setDashboardData([data], "users"));
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
