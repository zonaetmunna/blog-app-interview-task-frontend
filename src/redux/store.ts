import { configureStore } from '@reduxjs/toolkit';
import {
	persistReducer,
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { baseApi } from './api/baseApi';
import favoriteBlogReducer from './features/favoriteBlog/favoriteBlogSlice';

const persistConfig = {
	key: 'auth',
	storage,
};

const persistedAuthReducer = persistReducer(persistConfig, favoriteBlogReducer);

export const store = configureStore({
	reducer: {
		[baseApi.reducerPath]: baseApi.reducer,
		favoritePost: persistedAuthReducer,
	},
	middleware: (getDefaultMiddlewares) =>
		getDefaultMiddlewares({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
