import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeIndex: 0,
  data: [],
  sortType: 'latest',
};

const activeIndexSlice = createSlice({
  name: 'activeIndex',
  initialState,
  reducers: {
    setActiveIndex: (state, action) => {
      state.value = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    setSortType: (state, action) => {
      state.sortType = action.payload;
    },
    sortData: (state) => {
      if (state.sortType === 'latest') {
        state.data.sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      } else if (state.sortType === 'highCalories') {
        state.data.sort((a, b) => (b.kcal || 0) - (a.kcal || 0));
      } else if (state.sortType === 'lowCalories') {
        state.data.sort((a, b) => (a.kcal || 0) - (b.kcal || 0));
      }
    },
  },
});

export const { setActiveIndex, setData, setSortType, sortData } =
  activeIndexSlice.actions;
export default activeIndexSlice.reducer;
