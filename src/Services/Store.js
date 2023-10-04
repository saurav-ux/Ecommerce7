import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";  
import {commentapi } from "./commentttApi";
import { loginApi } from "./loginApi";
import containerSlice from "./containerSlice";
export const store = configureStore({
  reducer: {
    [commentapi.reducerPath]: commentapi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    containerr: containerSlice 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(commentapi.middleware,loginApi.middleware),
    
});
