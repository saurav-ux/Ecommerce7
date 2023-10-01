import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";  
import {commentapi } from "./commentttApi";
import containerSlice from "./containerSlice";
export const store = configureStore({
  reducer: {
    [commentapi.reducerPath]: commentapi.reducer,
    containerr: containerSlice 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(commentapi.middleware),
});
