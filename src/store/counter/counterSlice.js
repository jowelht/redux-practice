import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        items: [],
        totalQuantity: 10,
        changed: true,
    },
    reducers: {
        increment(state, action){
            state.totalQuantity++
            
        },
        decrement(state, action){
            state.totalQuantity--
        },
        addby(state, action){
            state.totalQuantity += action.payload
        }
    },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;