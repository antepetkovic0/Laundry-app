import axios from "axios";
import {
  deleteDashboardData,
  setDashboardData,
} from "../store/actions/dashboard";
import { TOAST_TYPE } from "../utils/constants";
import { toastMessage } from "../utils/toast";

const URL = "http://localhost:8080/api/users";
axios.defaults.withCredentials = true;
axios.defaults.credentials = "include";

export const getActiveUsers = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}`);
    dispatch(setDashboardData(data, "users"));
  } catch (err) {
    toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
  }
};

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
    toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
  }
};
