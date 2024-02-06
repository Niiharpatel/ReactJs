import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0
};

const countslice = createSlice({
    name: "count",
    initialState,
    reducers: {
        increment: (state) => {
            state.count++;
        },

        decrement: (state) => {
            state.count--;
        },

        reset: (state) => {
            state.count = 0;
        }
    }
});

export default countslice.reducer;
export const { increment, decrement, reset } = countslice.actions;