import { OPEN_DRAWER, CLOSE_DRAWER } from '../actions/sideDrawer';

const INITIAL_STATE = {
  sideDrawer: false
}

const sideDrawerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_DRAWER:
      return {...state, sideDrawer: action.value};
    case CLOSE_DRAWER:
      return {...state, sideDrawer: action.value};
    default:
      return state;
  }
};

export default sideDrawerReducer;