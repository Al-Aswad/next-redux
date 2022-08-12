import { createAction, createReducer } from '@reduxjs/toolkit';

export const increment:any = createAction<number>('increment/couter');
export const decrement:any = createAction<number>('decrement/couter');
export const incrementAmount:any = createAction<number>('incrementAmount/couter',);

let action= incrementAmount(20);
console.log(action);

//reducer
//1. using builder notation

const initialState={
    value:0
};
// export const counterSlice = createReducer(initialState, builder =>{
//     builder.addCase(increment, (state, action)=>{
//         state.value ++;
//     });
//     builder.addCase(decrement, (state, action)=>{
//         state.value--
//     });
//     builder.addCase(incrementAmount, (state, action:any)=>{
//         state.value += action.payload;
//     } );
// });

// 2. using map notation
export const counterSlice = createReducer(initialState, {
    [increment]: (state, action)=>{
        state.value ++;
    },
    [decrement]: (state, action)=>{
        state.value--
    } ,
    [incrementAmount]: (state, action:any)=>{
        state.value += action.payload;
    }
});

