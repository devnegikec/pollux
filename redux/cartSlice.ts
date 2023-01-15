import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {RootState} from './store';

type Product = {
	_id: string;
	price: number;
};

type CartState = Product[];

const initialState: CartState = [];

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToBasket: (state, action) => {
			state = [...state, action.payload];
		},
		removeFromBasket: (
			state: CartState,
			action: PayloadAction<{id: string}>,
		) => {
			const index = state.findIndex((item) => item._id === action.payload.id);
			let newBasket = [...state];

			if (index >= 0) {
				newBasket.splice(index, 1);
				if (index >= 0) {
					newBasket.splice(index, 1);
				} else {
					console.log(
						`Can't remvoe product (id:${action.payload.id}) as its not in basket!`,
					);
				}
				state = newBasket;
			}
		},
	},
});

// Action creators are generated for each case reducer function
export const {addToBasket, removeFromBasket} = cartSlice.actions;

//selectors
export const selectBasketItems = (state: RootState) => state.cart;
export const selectBasketItemsWithId = (state: RootState, id: string) => {
	state.cart.filter((item: Product) => item._id === id);
};
export const selectBasketTotal = (state: RootState) =>
	state.cart.reduce((total: number, item: Product) => (total += item.price), 0);
export default cartSlice.reducer;
