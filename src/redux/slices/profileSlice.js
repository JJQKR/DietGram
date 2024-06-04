import { createSlice } from '@reduxjs/toolkit';

const INITIAL_PROFILE = [
  { id: 'woirhw12313-dff22-333ff-4444444dfdf' },
  { profieImage },
  { currentNickname },
  { newNickname }
];

const profileSlice = createSlice({
  name: 'profile',
  initialState: INITIAL_PROFILE,
  reducers: {
    changeProfileImage: (state, action) => {
      const { currentProfileImage, newProfileImage } = action.payload;
      const { existingProfileImage } = currentProfileImage ? true : 기본이미지;
      // 기존 이미지가 존재하면 그거에서 바꾸고
      // 없으면 (기본 이미지)이면 그거에서 바꾸고
    },

    changeNickname: (state, action) => {
      const { currentNickname, newNickname } = action.payload;
      const existingNickname = state.find((nickname) => profile.nickname === nickname);
      //여기 변수명이랑 로직 변경 필요

      if (existingProfile) {
        existingNickname.nickname = nickname;
      }
    },

    deletePost: (state, action) => {
      const { id } = action.payload;
      return state.filter((profile) => profile.id !== id);
      //여기도 변수명이랑 로직 변경 필요
    }
  }
});

export const { addPost, changePost, deletePost } = postsSlice.actions;
export default postsSlice.reducer;
