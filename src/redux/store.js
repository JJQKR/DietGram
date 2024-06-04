import { configureStore } from "@reduxjs/toolkit";
import commentsSlice from "./slices/comments.slice";
import formSlice from "./slices/form.slice";
import postsSlice from "./slices/posts.slice";
import activeIndexSilce from "./slices/sortslice";
import userSlice from "./slices/user.slice";

const store = configureStore({
  reducer: {
    posts: postsSlice,
    comments: commentsSlice,
    formData: formSlice,
    activeIndex: activeIndexSilce,
    user: userSlice,
  },
});

export default store;
