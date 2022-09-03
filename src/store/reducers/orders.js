import {
  CREATE_ORDER,
  EDIT_ORDER_STATUS,
  FETCH_ORDERS,
} from "../actions/orders";

const INITIAL_STATE = {
  list: [],
  lastFetched: null,
};

const shops = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ORDERS:
      return {
        ...state,
        list: action.payload.orders,
        lastFetched: action.payload.fetchTime,
      };

    case CREATE_ORDER:
      return {
        ...state,
        list: [action.payload.order, ...state.list],
      };
    case EDIT_ORDER_STATUS:
      return {
        ...state,
        list: state.list.map((order) =>
          order.id !== action.payload.orderId
            ? order
            : {
                ...order,
                ...action.payload.data,
              }
        ),
      };
    default:
      return state;
  }
};

export default shops;
