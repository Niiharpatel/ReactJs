import { createSlice } from "@reduxjs/toolkit";

const initialState = { users: [] };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    updateUser: (state, { payload }) => {
      state.users.splice(payload.ind, 1, payload.newData);
    },
    removeUser: (state, { payload }) => {
      state.users.splice(payload, 1);
    },
  },
});

export default userSlice.reducer;
export const { addUser, updateUser, removeUser } = userSlice.actions;
