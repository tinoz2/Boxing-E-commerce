import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = [];

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const productToAdd = action.payload;
            const existingProduct = state.find(p => p._id === productToAdd._id);

            if (existingProduct) {
                existingProduct.qty += 1;
                toast.success(`${productToAdd.title} added to cart.`);
            } else {
                state = [...state, { ...productToAdd, qty: 1 }];
                toast.success(`${productToAdd.title} added to cart.`);
            }

            return state;
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
        },
        emptyCart: (state, action) => {
            return []
        }
    },
});



export const { addToCart, filterToCart, emptyCart } = productSlice.actions;

export default productSlice.reducer;
