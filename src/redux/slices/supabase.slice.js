import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataList: [],
};

const supabaseSlice = createSlice({
  name: "supabase",
  initialState,
  reducers: {
    insertPost: (state, action) => {
      state.dataList.push(action.payload);
    },

    deletePost: (state, action) => {
      const idx = state.dataList.findIndex(
        (item) => item.id !== action.payload.id
      );
      state.dataList.splice(idx, 0);
      console.log("state.dataList.length", state.dataList.length);
    },
    initDataList: (state, action) => {
      state.dataList = action.payload;
    },
  },
});

export const { insertPost, deletePost, initDataList } = supabaseSlice.actions;
export default supabaseSlice.reducer;
