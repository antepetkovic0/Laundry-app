import axios from "axios";
import {
  deleteDashboardData,
  setDashboardData,
} from "../store/actions/dashboard";
import { TOAST_TYPE } from "../utils/constants";
import { toastMessage } from "../utils/toast";

const URL = "http://localhost:8080";
axios.defaults.withCredentials = true;
axios.defaults.credentials = "include";

export const getPendingRegistrations = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/api/auth/request`);
    console.log(data);
    dispatch(setDashboardData(data, "pending"));
  } catch (err) {
    toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
  }
};

export const declinePendingRegistration = (hash, id) => async (dispatch) => {
  try {
    await axios.delete(`${URL}/api/auth/request/approval/${hash}`);
    dispatch(deleteDashboardData(id, "pending"));
  } catch (err) {
    toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
  }
};

export const approvePendingRegistration = (hash, id) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${URL}/api/auth/request/approval`, {
      hash,
    });
    dispatch(deleteDashboardData(id, "pending"));
    dispatch(setDashboardData([data], "users"));
  } catch (err) {
    toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
  }
};
