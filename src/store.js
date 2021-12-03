
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './MiddleTodo/TodoSlice';
import filterReducer from "./Filter/filterSlice";

const store = configureStore({
    reducer:{
        todos : todoReducer,
        filters : filterReducer
    }
})

export default store;