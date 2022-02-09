// eslint-disable-next-line import/no-extraneous-dependencies
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import storeCache from "../utils/localStorage";
import { getCookie } from "../utils/cookie";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const userData = getCookie("user");
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
