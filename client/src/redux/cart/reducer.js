import { addItemsToCart, decreaseItemQtyInCart, addQty } from "./utils";
import { cartActionTypes } from "./types";

const INITIAL_STATE = {
  showCart: false,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_SHOW_CART:
      return { ...state, showCart: !state.showCart };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemsToCart(state.cartItems, action.payload),
      };
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case cartActionTypes.DECREASE_ITEM_QTY:
      return {
        ...state,
        cartItems: decreaseItemQtyInCart(state.cartItems, action.payload),
      };
    case cartActionTypes.ADD_QTY:
      return {
        ...state,
        cartItems: addQty(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};
