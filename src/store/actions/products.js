export const FETCH_SHOP_PRODUCTS = "FETCH_SHOP_PRODUCTS";
export const CREATE_PRODUCT = "CREATE_PRODUCT";

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
