import { createSlice } from '@reduxjs/toolkit';

const initialState = { amount: 0 };

const amountslice = createSlice({
    name: "amount",
    initialState,
    reducers: {
        increment: ((state) => {
            state.amount++;
        }),
        decrement: ((state) => {
            state.amount--;
        }),
        reset: ((state) => {
            state.amount = 0;
        })
    },

    extraReducers: {
        ["count/increment"]: (state) => {
            state.amount += 100; 
        }
    }
});

export default amountslice.reducer;
export const { increment, decrement, reset } = amountslice.actions;
