import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: []
    },
    reducers: {
        getProducts: (state, action) => {
            state.products = action.payload.map(product => {
                return {
                    id: product.id,
                    name: product.name,
                    image: product.image_link,
                    price:product.price
                }
            })
        }
    }
});

export const { getProducts } = productSlice.actions;
export default productSlice.reducer;