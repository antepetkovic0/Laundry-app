export const FETCH_SHOPS = "FETCH_SHOPS";
export const FETCH_SPECIFIC_SHOP = "FETCH_SPECIFIC_SHOP";
export const CREATE_SHOP = "CREATE_SHOP";
export const DELETE_SHOP = "DELETE_SHOP";

export const getShops = (data) => ({
  type: FETCH_SHOPS,
  payload: {
    data,
  },
});

export const getSpecificShop = (data) => ({
  type: FETCH_SPECIFIC_SHOP,
  payload: {
    data,
  },
});

export const createShop = (data) => ({
  type: CREATE_SHOP,
  payload: {
    data,
  },
});

export const deleteShop = (id) => ({
  type: DELETE_SHOP,
  payload: {
    id,
  },
});
