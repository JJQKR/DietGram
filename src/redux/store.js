import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./slices/form.slice";
import supabaseSlice from "./slices/supabase.slice";

const store = configureStore({
  reducer: {
    supabase: supabaseSlice,
    formData: formSlice,
  },
});

export default store;
