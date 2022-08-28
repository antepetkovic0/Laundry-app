import {
  ADD_PRODUCT_TO_CART,
  DECREASE_PRDOUCT_QUANTITY,
  INCREASE_PRDOUCT_QUANTITY,
  REMOVE_PRODUCT_FROM_CART,
} from "../actions/cart";

const INITIAL_STATE = [];

const cart = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return [...state, { ...action.payload.product, total: 1 }];
    case REMOVE_PRODUCT_FROM_CART:
      return state.filter((product) => product.id !== action.payload.productId);
    case INCREASE_PRDOUCT_QUANTITY:
      return state.map((product) =>
        product.id !== action.payload.productId
          ? product
          : {
              ...product,
              total: product.total + 1,
            }
      );
    case DECREASE_PRDOUCT_QUANTITY:
      return state.map((product) =>
        product.id !== action.payload.productId
          ? product
          : {
              ...product,
              total: product.total === 1 ? 1 : product.total - 1,
            }
      );
    default:
      return state;
  }
};

export default cart;
