import { FETCH_SHOP_PRODUCTS } from "../actions/products";

const INITIAL_STATE = {};

const products = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SHOP_PRODUCTS:
      return {
        ...state,
        [action.payload.shopId]: {
          list: [
            ...(state?.[action.payload.shopId]?.list ?? []),
            ...action.payload.data.rows,
          ],
          count: action.payload.data.count,
          lastFetched: action.payload.fetchTime,
        },
      };
    default:
      return state;
  }
};

export default products;
