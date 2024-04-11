import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useState } from "react";

const initialState = {
  cart: [],
};

export const getAllCart = createAsyncThunk("cart/getAllCart", () => {
  console.log("gell all cart calling by cart slice");
  return axios({
    method: "get",
    url: "http://localhost:9999/cart/getAll",
    headers: {
      "Content-Type": "application/json",
      authorization: `Berar ${JSON.parse(localStorage.getItem("token"))}`,
    },
  }).then((resData) => {
    console.log("resData cart:", resData);
    console.log("resData cart local:", initialState.cart);
    // let productCart = resData?.data?.data[0]?.products || [];
    // initialState.cart = productCart;
    // initialState.cartTotalQuantity = productCart.length;
    // initialState.cartTotalAmount = 0;
    // console.log("resData cart local update:", initialState.cart);
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
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCart.fulfilled, (state, { payload }) => {
      console.log("🚀 ~ file: cartSlice.js:35 ~ payload data:", payload);
      state.cart = payload;
    });
  },
});

export default cartSlice.reducer;

export const { addToCart } = cartSlice.actions;
