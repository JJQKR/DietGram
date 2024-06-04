import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    getCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { getCurrentUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;
