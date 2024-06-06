import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  postList: [],
  currentUserId: '',
  currentPostId: '',
  likes: 0
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    insertPost: (state, action) => {
      state.postList.push(action.payload[0]);
    },

    deletePost: (state, action) => {
      const filteredPost = state.postList.filter((item) => item.id !== action.payload.id);
      state.postList = filteredPost;
    },
    updatePost: (state, action) => {
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
    },

    initPostLikes: (state, action) => {
      state.likes = action.payload;
    },
    clickedPostLikes: (state, action) => {
      action.payload ? (state.likes += 1) : (state.likes -= 1);
    }
  }
});

export const {
  insertPost,
  deletePost,
  updatePost,
  initCommentList,
  initPostList,
  selectUser,
  selectPost,
  initPostLikes,
  clickedPostLikes
} = postsSlice.actions;
export default postsSlice.reducer;
