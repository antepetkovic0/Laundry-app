import { createStore, compose, applyMiddleware } from "redux";
// import thunk from 'redux-thunk';

import rootReducer from "./reducers";
import sideDrawerReducer from "./reducers/sideDrawer";

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  sideDrawerReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);