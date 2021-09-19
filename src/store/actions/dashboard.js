export const SET_DATA = "SET_DATA";
export const DELETE_DATA = "DELETE_DATA";
export const DELETE_SHOP_PRODUCT = "DELETE_SHOP_PRODUCT";

export const setDashboardData = (data, type) => ({
  type: SET_DATA,
  payload: {
    type,
    data,
  },
});

export const deleteDashboardData = (id, type) => ({
  type: DELETE_DATA,
  payload: {
    type,
    id,
  },
});

export const deleteShopProduct = (id, shopId) => ({
  type: DELETE_SHOP_PRODUCT,
  payload: {
    id,
    shopId,
  },
});
