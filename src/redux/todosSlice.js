import { createSlice } from "@reduxjs/toolkit";
// import { Types } from "./types"

const initialState = {
  todos: [],
};
// Redux core
// export const todosReducer = (state = initialState, action) => {
//   console.log({action})
//   switch(action.type) {
//     case Types.addTodo: {
//       return {todos: [...state.todos, action.payload]};
//     }
//     case Types.deleteTodo: {
//       return {todos: state.todos.filter((todo) => todo.id !== action.payload)};

//     }
//     default:
//       return state
//   }
// }
// redux toolkit
const todosSlice = createSlice({
  name: "Todos",
  initialState,
  reducers: {
    addTodoAction: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodoAction: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});
export const { addTodoAction, deleteTodoAction } = todosSlice.actions;
export default todosSlice.reducer;  
