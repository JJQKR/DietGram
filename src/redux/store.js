import { configureStore } from "@reduxjs/toolkit";
import supabaseSlice from "./slices/supabase.slice";

const store = configureStore({
  reducer: {
    supabase: supabaseSlice,
  },
});

export default store;
