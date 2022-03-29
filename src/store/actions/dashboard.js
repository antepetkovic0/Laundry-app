export const GET_DASHBOARD_INIT = "GET_DASHBOARD_INIT";
export const GET_DASHBOARD_SUCCESS = "GET_DASHBOARD_SUCCESS";
export const GET_DASHBOARD_ERROR = "GET_DASHBOARD_ERROR";

export const DELETE_DATA = "DELETE_DATA";
export const DELETE_SHOP_PRODUCT = "DELETE_SHOP_PRODUCT";
export const UPDATE_SHOP_PRODUCT = "UPDATE_SHOP_PRODUCT";

export const getDashboardData = () => ({
  type: GET_DASHBOARD_INIT,
});

export const setDashboardData = (data) => ({
  type: GET_DASHBOARD_SUCCESS,
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
