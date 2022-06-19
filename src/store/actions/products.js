export const FETCH_SHOP_PRODUCTS = "FETCH_SHOP_PRODUCTS";

export const getShopProducts = (data, shopId) => ({
  type: FETCH_SHOP_PRODUCTS,
  payload: {
    data,
    shopId,
    fetchTime: new Date().getTime(),
  },
});
