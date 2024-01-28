import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TBlog } from '../../../types/types';

type TInitialState = {
	favoritePosts: TBlog[];
};

const initialState: TInitialState = {
	favoritePosts: [],
};

const favoriteSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleFavorite: (state, action: PayloadAction<TBlog>) => {
			const index = state.favoritePosts.findIndex((post) => post.id === action.payload.id);
			if (index === -1) {
				state.favoritePosts.push(action.payload);
			} else {
				state.favoritePosts.splice(index, 1);
			}
		},
		removeFavorite: (state, action: PayloadAction<TBlog>) => {
			const index = state.favoritePosts.findIndex((post) => post.id === action.payload.id);
			if (index !== -1) {
				state.favoritePosts.splice(index, 1);
			}
		},
	},
});

export const { toggleFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
