import {
  DELETE_DATA,
  DELETE_SHOP_PRODUCT,
  UPDATE_SHOP_PRODUCT,
  FETCH_DASHBOARD_SHOPS,
  FETCH_DASHBOARD_USERS,
  FETCH_DASHBOARD_PENDING,
} from "../actions/dashboard";

const INITIAL_STATE = {
  users: {
    count: null,
    user: null,
  },
  pending: {
    count: null,
    user: null,
  },
  shops: {
    count: null,
    shop: null,
  },
  orders: {
    count: null,
    list: [],
  },
};

const dashboard = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DASHBOARD_USERS:
    case FETCH_DASHBOARD_PENDING:
    case FETCH_DASHBOARD_SHOPS:
      return {
        ...state,
        ...action.payload.data,
      };
    // case SET_DATA:
    //   return {
    //     ...state,
    //     [action.payload.type]: [
    //       ...action.payload.data,
    //       ...state[action.payload.type],
    //     ],
    //   };
    // case TOGGLE_TODO:
    //   return {
    //     ...state,
    //     users: state.users.map((todo) =>
    //       todo.id !== action.payload
    //         ? todo
    //         : { ...todo, completed: !todo.completed }
    //     ),
    //   };
    case DELETE_DATA:
      return {
        ...state,
        [action.payload.type]: state[action.payload.type].filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case DELETE_SHOP_PRODUCT:
      return {
        ...state,
        shops: state.shops.map((shop) =>
          shop.id !== action.payload.shopId
            ? shop
            : {
                ...shop,
                products: shop.products.filter(
                  (product) => product.id !== action.payload.id
                ),
              }
        ),
      };
    case UPDATE_SHOP_PRODUCT:
      return {
        ...state,
        shops: state.shops.map((shop) =>
          shop.id !== action.payload.shopId
            ? shop
            : {
                ...shop,
                products: shop.products.map((product) =>
                  product.id !== action.payload.id
                    ? product
                    : {
                        ...product,
                        ...action.payload.product,
                      }
                ),
              }
        ),
      };
    default:
      return state;
  }
};

export default dashboard;
