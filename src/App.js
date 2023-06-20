import "./App.css";
// import { useState } from "react";
// import {
//   addTodo,
//   addTodoAsync,
//   decreaseCount,
//   deleteTodo,
//   increaseCount,
// } from "./redux/actions";
// import { store } from "./redux/store";
// import { connect, useDispatch, useSelector } from "react-redux";
// import { decremented, incremented } from "./redux/counterSlice";
// import { addTodoAction, deleteTodoAction } from "./redux/todosSlice";
import LoginForm from "./components/LoginFrom";

function App(props) {
  return (
    <LoginForm></LoginForm>
  ) }
  // const dispatch = useDispatch();
  // const todos = useSelector((state) => state.todos.todos);
  // // console.log("todos",todos);
  // const [name, setName] = useState("");
  // const handleIncrease = () => {
  //   dispatch(incremented(1));
  // };

  // const handleDescrease = () => {
  //   dispatch(decremented(1));
  // };

  // const handleOnchange = (e) => {
  //   setName(e.target.value);
  // };

  // const handleAddTodo = () => {
  //   props.addTodo({
  //     name,
  //     id: Math.floor(Math.random() * 100),
  //   });
  //   setName("");
  // };

  // const handleDeleteTodo = (id) => {
  //   props.deleteTodo(id);
  // };

  // return (
    // <div className="App flex flex-col justify-center items-center w-[500px] mx-auto  mt-10">
    //   <h1 className="p-5 text-3xl font-bold">Redux toolkit</h1>
    //   <h4>The count is: {props.count}</h4>
    //   <div className="flex p-5 gap-x-20">
    //     <button className="px-6 py-3 text-white bg-blue-400 border border-gray-400 rounded-lg" onClick={handleIncrease}>Increase</button>
    //     <button className="px-6 py-3 text-white bg-red-400 border border-gray-400 rounded-lg"  onClick={handleDescrease}>Descrease</button>
    //   </div>
    //   <div className="flex p-5 gap-x-5">
    //     <input className="p-5 border border-green-400 rounded-lg" value={name} onChange={handleOnchange} />
    //     <button className="p-2 text-white bg-blue-300 border border-gray-400 rounded-lg" onClick={handleAddTodo}>Add todo</button>
    //   </div>
    //   {todos.map((todo, index) => {
    //     return (
    //       <div className="flex w-full p-2 gap-x-2 justify-cent" key={todo.id}>
    //         {index} - {todo.name}
    //         <span className="px-2 text-white bg-red-400 border border-red-400 rounded" onClick={() => handleDeleteTodo(todo.id)}> X</span>
    //       </div>
    //     );
    //   })}
    // </div>
//   );
// }

// function mapStatetoProps(state) {
//   return {
//     count: store.getState().count.count,
//   };
// }

// function mapDispatchtoProps(dispatch) {
//   return {
//     addTodo: (data) => store.dispatch(addTodoAction(data)),
//     deleteTodo: (data) => dispatch(deleteTodoAction(data)),
//   };
// }

// export default connect(mapStatetoProps, mapDispatchtoProps)(App);
export default App;
