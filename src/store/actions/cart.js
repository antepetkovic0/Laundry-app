export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";
export const INCREASE_PRDOUCT_QUANTITY = "INCREASE_PRDOUCT_QUANTITY";
export const DECREASE_PRDOUCT_QUANTITY = "DECREASE_PRDOUCT_QUANTITY";

export const addProductToCart = (product) => ({
  type: ADD_PRODUCT_TO_CART,
  payload: {
    product,
  },
});

export const removeProductFromCart = (productId) => ({
  type: REMOVE_PRODUCT_FROM_CART,
  payload: {
    productId,
  },
});

export const decreaseProductQuantity = (productId) => ({
  type: DECREASE_PRDOUCT_QUANTITY,
  payload: {
    productId,
  },
});

export const increaseProductQuantity = (productId) => ({
  type: INCREASE_PRDOUCT_QUANTITY,
  payload: {
    productId,
  },
});
