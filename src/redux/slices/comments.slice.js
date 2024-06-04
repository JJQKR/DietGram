import { createSlice } from "@reduxjs/toolkit";

const initComment = {
  comment: "",
  post_id: 0,
};

const initialState = {
  commentList: [initComment],
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    insertData: (state, action) => {
      state.commentList.push(action.payload[0]);
    },

    deleteData: (state, action) => {
      const idx = state.commentList.findIndex(
        (item) => item.id !== action.payload.id
      );

      state.commentList.splice(idx, 1);
    },
    updateData: (state, action) => {
      const index = state.commentList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.commentList[index] = action.payload;
      }
    },

    initCommentList: (state, action) => {
      state.commentList = action.payload;
    },
  },
});

export const { insertData, deleteData, updateData, initCommentList } =
  commentsSlice.actions;
export default commentsSlice.reducer;
