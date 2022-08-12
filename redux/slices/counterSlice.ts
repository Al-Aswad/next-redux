import { createAction, createReducer } from '@reduxjs/toolkit';

export const increment = createAction('increment/couter');
export const decrement = createAction('decrement/couter');
export const incrementAmount = createAction('incrementAmount/couter');

//reducer
//1. using builder notation

const initialState={
    value:0
};
export const counterSlice = createReducer(initialState, builder =>{
    builder.addCase(increment, (state, action)=>{
        state.value ++;
    });
    builder.addCase(decrement, (state, action)=>{
        state.value--
    });
    builder.addCase(incrementAmount, (state, action:any)=>{
        state.value += action.payload;
    } );
})