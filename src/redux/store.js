import { configureStore } from '@reduxjs/toolkit';
import formSlice from './slices/form.slice';
import supabaseSlice from './slices/supabase.slice';
import activeIndexSilce from './slices/sortslice';

const store = configureStore({
  reducer: {
    supabase: supabaseSlice,
    formData: formSlice,
    activeIndex: activeIndexSilce,
  },
});

export default store;
