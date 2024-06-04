import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./slices/form.slice";
import activeIndexSilce from "./slices/sortslice";
import supabaseSlice from "./slices/supabase.slice";
import userSlice from "./slices/user.slice";

const store = configureStore({
  reducer: {
    supabase: supabaseSlice,
    formData: formSlice,
    activeIndex: activeIndexSilce,
    user: userSlice,
  },
});

export default store;
