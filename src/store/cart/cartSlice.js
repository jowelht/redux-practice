import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
        changed: true,
    },
    reducers: {
        addToCart(state, action){
            const newItem = action.payload;
            // to Check if item is already available
            const existingItem = state.items.find((item)=> item.id === newItem.id)
            if(existingItem){
                existingItem.quantity++
                existingItem.price += newItem.price
            } else {
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }
        }
    }

})


export const cartActions = cartSlice.actions;

export default cartSlice.reducer;