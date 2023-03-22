//state is mutable in redux => by using immer function(creating copy of state and update and return new state)

//provider-helping for inject-(provide state),
//store- contains all states,inject to react,
//reducer- implement logic of action + state
//action-(button click,cart increment,etc)

//store - state
//action - button click
//reducer - state update
//provider - to react

import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE={
    cartList: [],
    cartCount: 0,
};

const cartSlice= createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        addToCart: (state) => {
            state.cartCount = 1;
        },
        increment: (state) => {
            state.cartCount += 1;
        },
        decrement: (state) => {
            state.cartCount -= 1;
        },
    } 
})
export const {addToCart,increment,decrement} = cartSlice.actions; 
export default cartSlice.reducer; 