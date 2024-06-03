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
  },
});

export const { initFormData, changeValue } = formSlice.actions;

export default formSlice.reducer;
