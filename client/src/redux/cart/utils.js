export const addItemsToCart = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === itemToAdd.id
        ? { ...item, qty: Number(item.qty) + Number(itemToAdd.qty) }
        : item
    );
  }

  return [...cartItems, itemToAdd];
};

export const addQty = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, qty: Number(item.qty) + 1 } : item
    );
  }

  return [...cartItems, itemToAdd];
};

export const decreaseItemQtyInCart = (cartItems, itemToDecrease) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToDecrease.id
  );

  if (existingCartItem.qty === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToDecrease.id);
  }

  return cartItems.map((item) =>
    item.id === itemToDecrease.id ? { ...item, qty: item.qty - 1 } : item
  );
};
