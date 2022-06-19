export const FETCH_SHOP_PRODUCTS = "FETCH_SHOP_PRODUCTS";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const getShopProducts = (data, shopId) => ({
  type: FETCH_SHOP_PRODUCTS,
  payload: {
    data,
    shopId,
    fetchTime: new Date().getTime(),
  },
});

export const createProduct = (data) => ({
  type: CREATE_PRODUCT,
  payload: {
    data,
  },
});

export const editProduct = (productId, shopId, data) => ({
  type: EDIT_PRODUCT,
  payload: {
    productId,
    shopId,
    data,
  },
});

export const deleteProduct = (productId, shopId) => ({
  type: DELETE_PRODUCT,
  payload: {
    productId,
    shopId,
  },
});
