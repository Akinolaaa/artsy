import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProducts } from '../../api/api'

const fetchProductThunk = async(_, thunkAPI) => {
  const { search } = thunkAPI.getState().products;
  try {
    const res = await getAllProducts({ name: search }); //payload here is search filters
    return res;
  } catch(error){
      thunkAPI.rejectWithValue(error)
  }
}

export const fetchProduct = createAsyncThunk('product/fetch', fetchProductThunk);