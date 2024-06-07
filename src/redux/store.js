import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
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
  user: userSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

const persistor = persistStore(store);

export { persistor, store };
