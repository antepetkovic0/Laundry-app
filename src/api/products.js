import * as productActions from "../store/actions/products";
import { hideDialog } from "../store/actions/dialog";
import { setUIError, startUILoader, stopUILoader } from "../store/actions/ui";
import { TOAST_TYPE } from "../utils/constants";
import { toastMessage } from "../utils/toast";
import { httpClient } from "./client";

export const fetchProducts = (actionName, shopId) => async (dispatch) => {
  try {
    dispatch(startUILoader(actionName));
    const { data } = await httpClient.get(`/products/${shopId}`);
    dispatch(productActions.getShopProducts(data, shopId));
  } catch (err) {
    dispatch(setUIError(actionName));
  } finally {
    dispatch(stopUILoader(actionName));
  }
};

export const createProduct =
  (product, history, shopSlug) => async (dispatch) => {
    try {
      const { data } = await httpClient.post("/products", product);
      dispatch(productActions.createProduct(data));
      toastMessage("Product has been successfully created", TOAST_TYPE.SUCCESS);
      history.push(`/dashboard/shops/${shopSlug}`);
    } catch (err) {
      toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
    }
  };

export const editProduct = (product, history) => async (dispatch) => {
  try {
    await httpClient.put(`/products/${product.id}`, product);
    dispatch(productActions.editProduct(product.id, product.shopId, product));
    history.goBack();
    toastMessage("Product has been successfully updated", TOAST_TYPE.SUCCESS);
  } catch (err) {
    console.log(err);
    // toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
  }
};

export const deleteProduct = (productId, shopId) => async (dispatch) => {
  try {
    await httpClient.delete(`products/${productId}`);
    dispatch(productActions.deleteProduct(productId, shopId));
    dispatch(hideDialog());
    toastMessage("Product has been successfully deleted", TOAST_TYPE.SUCCESS);
  } catch (err) {
    console.log(err);
    // toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
  }
};
