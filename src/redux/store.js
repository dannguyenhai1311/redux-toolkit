import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import todosReducer from "./todosSlice";
// import { todosReducer } from './todosReducer'
export const store = configureStore({
  reducer: {
    count: counterReducer,
    todos: todosReducer,
  },
});
