import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";

export const store = configureStore({
  reducer: cartSlice,
});

// console.log("cartSlice", cartSlice);
