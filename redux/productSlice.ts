import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	selectedVaraint: {},
};
export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		selectVariant: (state, action) => {
			state.selectedVaraint = {...state.selectedVaraint, ...action.payload};
		},
	},
});

export const {selectVariant} = productSlice.actions;

//selectors
export const productVariantSelector = (state) => state.selectedVaraint;

export default productSlice.reducer;
