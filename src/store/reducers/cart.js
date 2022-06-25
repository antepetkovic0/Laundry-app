import { ADD_PRODUCT_TO_CART } from "../actions/cart";

const INITIAL_STATE = {};

const cart = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        [action.payload.productId]: {
          total: 1,
        },
      };
    default:
      return state;
  }
};

export default cart;
