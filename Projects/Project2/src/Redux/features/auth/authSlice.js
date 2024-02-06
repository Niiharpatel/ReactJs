import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: JSON.parse(localStorage.getItem("token")) || ""
};

const authslice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, { payload }) => {
            state.user = payload.data;
            state.token = payload.token;
            localStorage.setItem("user", JSON.stringify(payload.data || {}));
            localStorage.setItem("token", JSON.stringify(payload.token || ""));
        },
        logout: (state) => {
            state.user = {};
            state.token = '';
            localStorage.clear();
        }
    }
});

export default authslice.reducer;

export const { login, logout } = authslice.actions;