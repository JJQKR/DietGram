import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  isLogin: false,
  myLikes: [],
  totalUserInfo: [],
  selectedUserInfo: {}
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    checkLogin: (state, action) => {
      action.payload ? (state.isLogin = true) : (state.isLogin = false);
    },
    selectUserInfo: (state, action) => {
      state.selectedUserInfo = action.payload;
    },
    setTotalUserInfo: (state, action) => {
      state.totalUserInfo = action.payload;
    },

    setMyLikes: (state, action) => {
      state.myLikes = action.payload.like;
    }
  }
});

export const { getCurrentUser, checkLogin, setMyLikes, selectUserInfo, setTotalUserInfo } = userSlice.actions;
export default userSlice.reducer;
