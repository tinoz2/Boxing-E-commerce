import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const productToAdd = action.payload;
            const existingProduct = state.find(p => p._id === productToAdd._id)
            if (existingProduct) {
                existingProduct.qty += 1
            }
            else {
                state = [...state, { ...productToAdd, qty: 1 }];
            }
            return state
        },
        filterToCart: (state, action) => {
            const productToFilter = action.payload;
            if (productToFilter.qty === 1) {
                return state.filter(p => p._id !== productToFilter._id)
            }
            else (productToFilter.qty > 1)
            {
                const existingProduct = state.find(p => p._id === productToFilter._id)
                existingProduct.qty -= 1
            }
        }
    },
});



export const { addToCart, filterToCart } = productSlice.actions;

export default productSlice.reducer;
