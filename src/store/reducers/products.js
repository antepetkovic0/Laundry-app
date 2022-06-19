import {
  FETCH_SHOP_PRODUCTS,
  CREATE_PRODUCT,
  DELETE_PRODUCT,
} from "../actions/products";

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
    case CREATE_PRODUCT:
      return {
        ...state,
        [action.payload.data.shopId]: {
          ...state[action.payload.data.shopId],
          list: [
            ...(state?.[action.payload.data.shopId]?.list ?? []),
            action.payload.data,
          ],
          count: state[action.payload.data.shopId]
            ? state[action.payload.data.shopId].count + 1
            : 1,
        },
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        [action.payload.shopId]: {
          ...state[action.payload.shopId],
          list: state[action.payload.shopId].list.filter(
            (product) => product.id !== action.payload.productId
          ),
          count: state[action.payload.shopId].count - 1,
        },
      };
    default:
      return state;
  }
};

export default products;
