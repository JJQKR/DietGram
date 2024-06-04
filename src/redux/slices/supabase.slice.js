import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataList: [],
};

const supabaseSlice = createSlice({
  name: "supabase",
  initialState,
  reducers: {
    insertPost: (state, action) => {
      state.dataList.push(action.payload[0]);
    },

    deletePost: (state, action) => {
      const idx = state.dataList.findIndex(
        (item) => item.id !== action.payload.id
      );

      state.dataList.splice(idx, 0);
    },

    initDataList: (state, action) => {
      state.dataList = action.payload;
    },

    updatePost: (state, action) => {
      const index = state.dataList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.dataList[index] = action.payload;
      }
    },
  },
});

export const { insertPost, deletePost, initDataList, updatePost } =
  supabaseSlice.actions;
export default supabaseSlice.reducer;
