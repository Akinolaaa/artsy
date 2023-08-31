import { combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "./product/productSlice";

export const rootReducer = combineReducers({
  product: productReducer
});
