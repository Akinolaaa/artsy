
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";
import logger from 'redux-logger';

const middlewares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializable: false
  }).concat(middlewares)
})

export default store;