import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isLogin: false,
  myLikes: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    checkLogin: (state, action) => {
      action.payload ? (state.isLogin = true) : (state.isLogin = false);
    },

    setMyLikes: (state, action) => {
      state.myLikes = action.payload.like;
      console.log(action.payload.like);
    },
  },
});

export const { setCurrentUser, checkLogin, setMyLikes } = userSlice.actions;
export default userSlice.reducer;
