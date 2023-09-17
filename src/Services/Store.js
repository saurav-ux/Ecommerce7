import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {commentapi } from "./commentttApi";

export const store = configureStore({
  reducer: {
    [commentapi.reducerPath]: commentapi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(commentapi.middleware),
});
