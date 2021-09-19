import axios from "axios";
import {
  setDashboardData,
  deleteDashboardData,
} from "../store/actions/dashboard";
import { hideDialog } from "../store/actions/dialog";
import { TOAST_TYPE } from "../utils/constants";
import { toastMessage } from "../utils/toast";

const URL = "http://localhost:8080/api/shops";
axios.defaults.withCredentials = true;
axios.defaults.credentials = "include";

export const getShops = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}`);
    dispatch(setDashboardData(data, "shops"));
  } catch (err) {
    toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
  }
};

export const createShop = (shop) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${URL}`, shop);
    dispatch(deleteDashboardData([data], "shops"));
    toastMessage("Shop has been successfully created", TOAST_TYPE.SUCCESS);
  } catch (err) {
    toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
  }
};

export const deleteShop = (id) => async (dispatch) => {
  try {
    await axios.delete(`${URL}/${id}`);
    dispatch(deleteDashboardData(id, "shops"));
    dispatch(hideDialog());
    toastMessage("Shop has been successfully deleted", TOAST_TYPE.SUCCESS);
  } catch (err) {
    console.log(err);
    // toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
  }
};
