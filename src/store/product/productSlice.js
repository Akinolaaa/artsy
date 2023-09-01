
import { createSlice } from "@reduxjs/toolkit";
import { fetchProduct } from "./productThunks";
import { toast } from 'react-toastify';

const initialFilters = {
  search: '',
}

const INITIAL_STATE = {
  products: [],
  isLoading: false,
  error: null,
  ...initialFilters,
}

export const productSlice = createSlice({
  name: 'products',
  initialState: INITIAL_STATE,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload
    },
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearFilters: (state) => {
      return { ...state, ...initialFilters };
    },
  },
  
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    });
  }
})

export const { setProducts, handleChange } = productSlice.actions;
export const productReducer = productSlice.reducer;