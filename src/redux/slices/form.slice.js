import { createSlice } from "@reduxjs/toolkit";

const initializeFormData = (state) => {
  state.menu = "";
  state.content = "";
  state.kcal = 0;
  state.rating = 0.0;
  state.price = 0;
  state.place = "";
};

const initialState = {
  menu: "",
  content: "",
  kcal: 0,
  rating: 0.0,
  price: 0,
  place: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    initFormData: (state) => {
      initializeFormData(state);
    },

    changeValue: (state, action) => {
      state[action.payload.type] = action.payload.content;
    },

    changePost: (state, action) => {
      state.menu = action.payload.menu;
      state.content = action.payload.content;
      state.rating = action.payload.rating;
      state.kcal = action.payload.kcal;
      state.id = action.payload.kcal;
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

export const { initFormData, changeValue, selectPost, changePost } =
  formSlice.actions;

export default formSlice.reducer;
