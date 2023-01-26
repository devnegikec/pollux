import {configureStore} from '@reduxjs/toolkit';

import appSettings from './appSettings';
import cartSlice from './cartSlice';
import productSlice from './productSlice';

export const store = configureStore({
	reducer: {
		settings: appSettings,
		cart: cartSlice,
		product: productSlice,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
