import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        modifyQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
            }
        },
    },
});

export const { addToCart, removeFromCart, modifyQuantity } = cartSlice.actions;
export default cartSlice.reducer;