import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  commentList: []
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    insertData: (state, action) => {
      state.commentList.push(action.payload[0]);
    },

    deleteData: (state, action) => {
      const filteredData = state.commentList.filter((item) => item.id !== action.payload.id);

      state.commentList = filteredData;
    },
    updateData: (state, action) => {
      const index = state.commentList.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.commentList[index] = action.payload;
      }
    },

    initCommentList: (state, action) => {
      state.commentList = action.payload;
    }
  }
});

export const { insertData, deleteData, updateData, initCommentList } = commentsSlice.actions;
export default commentsSlice.reducer;
