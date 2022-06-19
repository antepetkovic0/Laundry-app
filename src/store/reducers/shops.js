import {
  FETCH_SHOPS,
  FETCH_SPECIFIC_SHOP,
  CREATE_SHOP,
  EDIT_SHOP,
  DELETE_SHOP,
} from "../actions/shops";

const INITIAL_STATE = {
  list: [],
  lastFetched: null,
  searchedBySlug: false,
};

const shops = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SHOPS:
      return {
        ...state,
        list: action.payload.data,
        lastFetched: action.payload.fetchTime,
      };
    case FETCH_SPECIFIC_SHOP:
      if (!action.payload.data) {
        return {
          ...state,
          searchedBySlug: true,
        };
      }

      return {
        ...state,
        list: state.list
          ? [...state.list, action.payload.data]
          : [action.payload.data],
        searchedBySlug: true,
      };
    case CREATE_SHOP:
      return {
        ...state,
        list: state.list
          ? [action.payload.data, ...state.list]
          : [action.payload.data],
      };
    case EDIT_SHOP:
      return {
        ...state,
        list: state.list.map((shop) =>
          shop.id !== action.payload.id
            ? shop
            : {
                ...shop,
                ...action.payload.data,
              }
        ),
      };
    case DELETE_SHOP:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default shops;
