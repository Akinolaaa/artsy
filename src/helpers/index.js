export const addCartItem = (cartItems, item) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === item.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) => cartItem.id === item.id ?
      {...cartItem, quantity: cartItem.quantity + 1} : cartItem
    );
  }
  return [...cartItems, {...item, quantity: 1 }]
}

export const removeCartItem = (cartItems, productToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );
  if (existingCartItem.quantity === 1){
    return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
  } 
  return cartItems.map((cartItem) => 
    cartItem.id === productToRemove.id ?
      {...cartItem, quantity: cartItem.quantity - 1}
      :
      cartItem
  )
  // Check if quantity is equal to 1, if it is , remove that item from the cart
  // return cartItems with matching cartItem with reduce
}

export const deleteCartItem = (cartItems, productToDelete) => {
  return cartItems.filter(cartItem => cartItem.id !== productToDelete.id)
}