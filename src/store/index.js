// eslint-disable-next-line import/no-extraneous-dependencies
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import storeCache from "../utils/localStorage";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = storeCache.get("APP_STATE");

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);

// function onStoreChange(state) {
//   storeCache.set("APP_STATE", state);
// }

// function observeStore(storet, onChange) {
//   let currentState;

//   function handleChange() {
//     const nextState = storet.getState();
//     if (nextState !== currentState) {
//       currentState = nextState;
//       onChange(currentState);
//     }
//   }

//   const unsubscribe = storet.subscribe(handleChange);
//   handleChange();
//   return unsubscribe;
// }

// observeStore(store, onStoreChange);

// function selectIsAuth(state) {
//   return state.profile.isAuth;
// }
// function selectProfile(state) {
//   return state.profile;
// }

// function handleChange() {
//   const previousValue = storeCache.get("USER_PROFILE");
//   console.log("prev val", previousValue);
//   const currentValue = selectIsAuth(store.getState());

//   if (previousValue !== currentValue) {
//     console.log(
//       "Some deep nested property changed from",
//       previousValue,
//       "to",
//       currentValue
//     );
//     storeCache.set("USER_PROFILE", selectProfile(store.getState()));
//   }
// }
// store.subscribe(() => handleChange());
