import { cartActionTypes } from "./types";

const INITIAL_STATE = {
  showCart: false,
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_SHOW_CART:
      return { ...state, showCart: !state.showCart };
    default:
      return state;
  }
};
