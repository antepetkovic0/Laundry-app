// eslint-disable-next-line import/no-extraneous-dependencies
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// TODO: maybe only get access token from local storage and try to get user profile
const userData = localStorage.getItem("user");
const userInitialState = userData
  ? { isAuth: true, ...JSON.parse(userData) }
  : { isAuth: false };

const initialState = {
  profile: userInitialState,
};

export const store = createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
