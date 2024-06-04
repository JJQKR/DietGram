import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  comments: [],
  inputValue: '',
};

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.comments = [...state.comments, action.payload];
    },
    changeValue: (state, action) => {
      state[action.payload.type] = action.payload.content;
    },

    // selectPost: (state, action) => {
    //   const selectedPost = state.recordList.filter(
    //     (item) => item.id === action.payload
    //   )[0];
    //   state.menu = selectedPost.menu;
    //   state.content = selectedPost.content;
    //   state.kcal = selectedPost.kcal;
    //   state.rating = selectedPost.rating;
    //   state.price = selectedPost.price;
    //   state.place = selectedPost.place;
    // },
  },
});

export const { changeValue, selectPost, addComment } = commentSlice.actions;

export default commentSlice.reducer;
