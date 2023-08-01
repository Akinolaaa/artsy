import { createContext, useReducer } from "react";
import { addCartItem, removeCartItem, deleteCartItem } from "../helpers";

export const CartContext = createContext({
  cartItems: [],
  cartCount: 0,
  total: 0,
  addItemToCart: () => null,
  removeItemFromCart: () => null,
  deleteItemFromCart: () => null,
});

export const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS'
}

const INITIAL_STATE = {
  cartItems: [],
  cartCount: 0,
  cartTotal: 0
}


export const cartReducer = (state, action) => {
  //console.log("cart dispatched");
  const { type, payload } = action;

  switch(type){
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state, ...payload
      }
    default:
      throw new Error(`Unhandled type ${type} in cart reducer`)
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { cartItems, cartCount, cartTotal } = state;

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity
    },0);
    const newCartTotal = newCartItems.reduce((total, cartItem) => 
      total + (cartItem.quantity * cartItem.price)
    ,0);
    const payload = {
      cartItems: newCartItems,
      cartCount: newCartCount,
      cartTotal: newCartTotal,
    }
    dispatch({type:CART_ACTION_TYPES.SET_CART_ITEMS, payload});
  }

  const addItemToCart = (product) => {
    const newCartItems = addCartItem(cartItems, product);
    updateCartItemsReducer(newCartItems);
  }
  const removeItemFromCart = (product) => {
    const newCartItems = removeCartItem(cartItems, product);
    updateCartItemsReducer(newCartItems);
  }
  const deleteItemFromCart = (product) => {
    const newCartItems = deleteCartItem(cartItems, product);
    updateCartItemsReducer(newCartItems);
  }

  const value = {
    cartItems, addItemToCart, removeItemFromCart,
    deleteItemFromCart, cartCount, cartTotal
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>

}


