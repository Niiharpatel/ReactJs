import { createSlice } from "@reduxjs/toolkit";

const initialState = { users: [] };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action) => {
      state.users.splice(action.payload.ind, 1, action.payload.newData);
    },
    deleteUser: (state, action) => {
      state.users.splice(action.payload, 1);
    },
  },
});

export default userSlice.reducer;
export const { addUser, updateUser, deleteUser } = userSlice.actions;
