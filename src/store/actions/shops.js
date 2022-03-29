export const GET_SHOPS_INIT = "GET_SHOPS_INIT";
export const GET_SHOPS_SUCCESS = "GET_SHOPS_SUCCESS";
export const GET_SHOPS_ERROR = "GET_SHOPS_ERROR";

export const getShops = () => ({
  type: GET_SHOPS_INIT,
});

export const setShopsData = (data) => ({
  type: GET_SHOPS_SUCCESS,
  payload: {
    data,
  },
});

export const setShopsError = (data) => ({
  type: GET_SHOPS_ERROR,
  payload: {
    error: data,
  },
});
