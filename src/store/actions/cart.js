export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const addProductToCart = (productId) => ({
  type: ADD_PRODUCT_TO_CART,
  payload: {
    productId,
  },
});
