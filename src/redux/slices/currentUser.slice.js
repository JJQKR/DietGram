import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isLogin: false,
};

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    checkLogin: (state, action) => {
      action.payload ? (state.isLogin = true) : (state.isLogin = false);
    },
  },
});

export const { setCurrentUser, checkLogin } = currentUserSlice.actions;
export default currentUserSlice.reducer;
