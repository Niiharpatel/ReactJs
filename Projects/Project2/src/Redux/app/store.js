import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import productSlice from "../features/productSlice/productSlice";
import cartSlice from "../features/cartSlice/cartSlice";

export const store = configureStore({
    reducer: {
        authSlice,
        productSlice,
        cartSlice
    }
});