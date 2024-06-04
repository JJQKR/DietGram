import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postList: [],
  commentList: [],
};

const supabaseSlice = createSlice({
  name: "supabase",
  initialState,
  reducers: {
    insertData: (state, action) => {
      state.postList.push(action.payload[0]);
    },

    deleteData: (state, action) => {
      const idx = state.postList.findIndex(
        (item) => item.id !== action.payload.id
      );

      state.postList.splice(idx, 0);
    },
    updateData: (state, action) => {
      const index = state.postList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.postList[index] = action.payload;
      }
    },

    initPostList: (state, action) => {
      state.postList = action.payload;
    },
    initCommentList: (state, action) => {
      state.commentList = action.payload;
    },
  },
});

export const {
  insertData,
  deleteData,
  updateData,
  initCommentList,
  initPostList,
} = supabaseSlice.actions;
export default supabaseSlice.reducer;
