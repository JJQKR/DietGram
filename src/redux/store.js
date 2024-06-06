// import supabaseSlice from './slices/supabase.slice';
// import currentUserSlice from './slices/currentUser.slice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import commentsSlice from './slices/comments.slice';
import formSlice from './slices/form.slice';
import postsSlice from './slices/posts.slice';
import activeIndexSilce from './slices/sortslice';
import userSlice from './slices/user.slice';

const persistConfig = {
  key: 'root',
  storage: storage
};

const rootReducer = combineReducers({
  posts: postsSlice,
  comments: commentsSlice,
  formData: formSlice,
  activeIndex: activeIndexSilce,
  // currentUser: currentUserSlice,
  user: userSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({ reducer: persistedReducer });

const persistor = persistStore(store);

export { persistor, store };
