import { cartActionTypes } from "./types";

export const toggleShowCart = () => ({
  type: cartActionTypes.TOGGLE_SHOW_CART,
});

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const decreaseItemQty = (item) => ({
  type: cartActionTypes.DECREASE_ITEM_QTY,
  payload: item,
});

export const addItemQty = (item) => ({
  type: cartActionTypes.ADD_QTY,
  payload: item,
});
