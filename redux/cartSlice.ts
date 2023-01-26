import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {RootState} from './store';

type Product = {
	_id: string;
	price: number;
	quantity: number;
};

export interface CartState {
	items: Product[];
}
const initialState: CartState = {
	items: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			state.items = [...state.items, action.payload];
		},
		removeFromCart: (state: CartState, action: PayloadAction<{id: string}>) => {
			const index = state.items.findIndex(
				(item) => item._id === action.payload.id,
			);
			let newCart = [...state.items];

			if (index >= 0) {
				newCart.splice(index, 1);
				if (index >= 0) {
					newCart.splice(index, 1);
				} else {
					console.log(
						`Can't remvoe product (id:${action.payload.id}) as its not in basket!`,
					);
				}
				state.items = newCart;
			}
		},
	},
});

// Action creators are generated for each case reducer function
export const {addToCart, removeFromCart} = cartSlice.actions;

//selectors
export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartItemsWithId = (state: RootState, id: string) => {
	state.cart.items.filter((item: Product) => item._id === id);
};
export const selectCartotal = (state: RootState) =>
	state.cart.items.reduce(
		(total: number, item: Product) => (total += item.price),
		0,
	);
export default cartSlice.reducer;
