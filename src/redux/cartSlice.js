import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addItem: (state, action) => {
            state.cart.push(action.payload);
        },
        removeItem: (state, action) => {
            // Find the index of the item to remove
            const indexToRemove = state.cart.findIndex(item => item.id === action.payload.id);
            if (indexToRemove !== -1) {
                state.cart.splice(indexToRemove, 1);
            }
        },
        clearCart: (state, action) => {
            state.cart = []
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;