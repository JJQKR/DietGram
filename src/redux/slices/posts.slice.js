import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  postList: [],
  currentUserId: '',
  currentPostId: ''
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    insertData: (state, action) => {
      state.postList.push(action.payload[0]);
    },

    deleteData: (state, action) => {
      const idx = state.postList.findIndex((item) => item.id !== action.payload);
      console.log(idx);
      state.postList.splice(idx, 1);
    },
    updateData: (state, action) => {
      const index = state.postList.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.postList[index] = action.payload;
      }
    },

    initPostList: (state, action) => {
      state.postList = action.payload;
    },

    selectUser: (state, action) => {
      state.currentUserId = action.payload;
    },

    selectPost: (state, action) => {
      state.currentPostId = action.payload;
      console.log(action.payload);
    }
  }
});

export const { insertData, deleteData, updateData, initCommentList, initPostList, selectUser, selectPost } =
  postsSlice.actions;
export default postsSlice.reducer;
