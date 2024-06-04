
import activeIndexSilce from './slices/sortslice';
import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./slices/form.slice";
import supabaseSlice from "./slices/supabase.slice";
import currentUserSlice from "./slices/currentUser.slice";

const store = configureStore({
  reducer: {
    supabase: supabaseSlice,
    formData: formSlice,

    activeIndex: activeIndexSilce,

    currentUser: currentUserSlice,

  },
});

export default store;
