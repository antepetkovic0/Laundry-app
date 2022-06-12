export const FETCH_DASHBOARD_USERS = "FETCH_DASHBOARD_USERS";
export const FETCH_DASHBOARD_SHOPS = "FETCH_DASHBOARD_SHOPS";

export const DELETE_DATA = "DELETE_DATA";
export const DELETE_SHOP_PRODUCT = "DELETE_SHOP_PRODUCT";
export const UPDATE_SHOP_PRODUCT = "UPDATE_SHOP_PRODUCT";

export const getDashboardData = (type, data) => ({
  type,
  payload: {
    data,
  },
});

// export const setDashboardData = (data, type) => ({
//   type: SET_DATA,
//   payload: {
//     type,
//     data,
//   },
// });

export const deleteDashboardData = (id, type) => ({
  type: DELETE_DATA,
  payload: {
    type,
    id,
  },
});

export const updateShopProduct = (id, shopId, product) => ({
  type: UPDATE_SHOP_PRODUCT,
  payload: {
    id,
    shopId,
    product,
  },
});

export const deleteShopProduct = (id, shopId) => ({
  type: DELETE_SHOP_PRODUCT,
  payload: {
    id,
    shopId,
  },
});
