
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  products: [],
  isLoading: false,
  error: null,
}

export const productSlice = createSlice({
  name: 'products',
  initialState: INITIAL_STATE,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload
    }
  }
})

export const { setProducts } = productSlice.actions;
export const productReducer = productSlice.reducer;