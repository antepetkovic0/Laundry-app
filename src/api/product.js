import axios from "axios";
import {
  deleteShopProduct,
  updateShopProduct,
} from "../store/actions/dashboard";
import { hideDialog } from "../store/actions/dialog";
import { getShopProducts } from "../store/actions/products";
import { setUIError, startUILoader, stopUILoader } from "../store/actions/ui";
import { TOAST_TYPE } from "../utils/constants";
import { toastMessage } from "../utils/toast";
import { httpClient } from "./client";

const URL = "http://localhost:8080/api/products";
axios.defaults.withCredentials = true;
axios.defaults.credentials = "include";

export const fetchProducts = (actionName, shopId) => async (dispatch) => {
  try {
    dispatch(startUILoader(actionName));
    const { data } = await httpClient.get(`/products/${shopId}`);
    dispatch(getShopProducts(data, shopId));
  } catch (err) {
    dispatch(setUIError(actionName));
  } finally {
    dispatch(stopUILoader(actionName));
  }
};

export const createProduct = (product) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${URL}`, product);
    console.log("data", data);
    // dispatch(setDashboardData([data], "shops"));
    toastMessage("Product has been successfully created", TOAST_TYPE.SUCCESS);
  } catch (err) {
    toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
  }
};

export const deleteProduct = (id, shopId) => async (dispatch) => {
  try {
    await axios.delete(`${URL}/${id}`);
    dispatch(deleteShopProduct(id, shopId));
    dispatch(hideDialog());
    toastMessage("Product has been successfully deleted", TOAST_TYPE.SUCCESS);
  } catch (err) {
    console.log(err);
    // toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
  }
};

export const editProduct = (id, product) => async (dispatch) => {
  try {
    const { data } = await axios.put(`${URL}/${id}`, product);
    dispatch(updateShopProduct(id, data.shopId, data));
    toastMessage("Product has been successfully updated", TOAST_TYPE.SUCCESS);
  } catch (err) {
    console.log(err);
    // toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
  }
};
