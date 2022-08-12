import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../slices/counterSlice";
import counterReducer from "../slices/counterSlice";

const store = configureStore({
    reducer:{
        counter:counterReducer,
    }
})

export default store;