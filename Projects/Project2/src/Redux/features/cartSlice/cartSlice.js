import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cart: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export const getAllCart = createAsyncThunk("cart/getAllCart", () => {
  return axios({
    method: "get",
    url: "http://localhost:9999/cart/getAll",
    headers: {
      "Content-Type": "application/json",
      authorization: `Berar ${JSON.parse(localStorage.getItem("token"))}`,
    },
  }).then((resData) => {
    console.log("🚀 ~ file: cartSlice.js:19 ~ getAllCart ~ resData:", resData);
    return resData?.data?.data[0]?.products || [];
  });
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
      console.log("🚀 ~ file: cartSlice.js:29 ~ action:", action.payload);
      console.log("🚀 ~ file: cartSlice.js:29 ~ state:", state.cart[0]);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCart.fulfilled, (state, { payload }) => {
      state.cart = payload;
    });
  },
});

export default cartSlice.reducer;

export const { addToCart } = cartSlice.actions;
