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

    // NOTE post.api.js 의 isLike 함수의 반환값인 배열을 사용
    // const data = await supabase.post.isLike(7);
    // const action = setMyLikes(data);
    // dispatch(action);
    // console.log("selector", selector.user.myLikes);

    setMyLikes: (state, action) => {
      state.myLikes = action.payload.like;
      console.log(action.payload.like);
    }
  }
});

export const { getCurrentUser, checkLogin, setMyLikes, selectUserInfo, setTotalUserInfo } = userSlice.actions;
export default userSlice.reducer;
