import { createSlice } from "@reduxjs/toolkit";
import { addCartItem, removeCartItem, deleteCartItem } from "../helpers";

const INITIAL_STATE = {
  cart: [],
  error: null,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    addToCart(state, action) {
      state.cart = addCartItem(state.cart, action.payload)
    },
    removeFromCart(state, action) {
      state.cart = removeCartItem(state.cart, action.payload)
    },
    deleteFromCart(state, action) {
      state.cart = deleteCartItem(state.cart, action.payload)
    },
  }
})

export const { addToCart, removeFromCart, deleteFromCart } = cartSlice.actions;
export const productReducer = cartSlice.reducer;