import { createSlice } from "@reduxjs/toolkit";

const initPost = {
  menu: "초기값",
  content: "입니다",
  kcal: 0,
  rating: 0.0,
  price: 0,
  place: "초기장소",
};

const initialState = {
  postList: [initPost],
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

      state.postList.splice(idx, 1);
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
