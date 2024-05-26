import { createSlice } from '@reduxjs/toolkit';

const initialState = { users: [] };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addData: (state, action) => {
      state.users.push(action.payload);
    },
    updateData: (state, action) => {
      state.users.splice(action.payload.ind, 1, action.payload.newData);
    },
    deleteData: (state, action) => {
      state.users.splice(action.payload, 1);
    },
  },
});

export const { addData, updateData, deleteData } = userSlice.actions;
export default userSlice.reducer;
