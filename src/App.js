import "./App.css";
import { useState } from "react";
import {
  addTodo,
  addTodoAsync,
  decreaseCount,
  deleteTodo,
  increaseCount,
} from "./redux/actions";
import { store } from "./redux/store";
import { connect, useDispatch, useSelector } from "react-redux";
import { decremented, incremented } from "./redux/counterSlice";
import { addTodoAction, deleteTodoAction } from "./redux/todosSlice";

function App(props) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  // console.log("todos",todos);
  const [name, setName] = useState("");
  const handleIncrease = () => {
    dispatch(incremented(1));
  };

  const handleDescrease = () => {
    dispatch(decremented(1));
  };

  const handleOnchange = (e) => {
    setName(e.target.value);
  };

  const handleAddTodo = () => {
    props.addTodo({
      name,
      id: Math.floor(Math.random() * 100),
    });
    setName("");
  };

  const handleDeleteTodo = (id) => {
    props.deleteTodo(id);
  };

  return (
    <div className="App flex flex-col justify-center items-center w-[500px] mx-auto  mt-10">
      <h1 className="text-3xl font-bold p-5">Redux toolkit</h1>
      <h4>The count is: {props.count}</h4>
      <div className="flex gap-x-20 p-5">
        <button className="px-6 py-3 border border-gray-400 rounded-lg bg-blue-400 text-white" onClick={handleIncrease}>Increase</button>
        <button className="px-6 py-3 border border-gray-400 rounded-lg bg-red-400 text-white"  onClick={handleDescrease}>Descrease</button>
      </div>
      <div className="flex p-5 gap-x-5">
        <input className="p-5 border border-green-400 rounded-lg" value={name} onChange={handleOnchange} />
        <button className="border border-gray-400 rounded-lg p-2 bg-blue-300 text-white" onClick={handleAddTodo}>Add todo</button>
      </div>
      {todos.map((todo, index) => {
        return (
          <div className="flex gap-x-2 p-2 w-full justify-center" key={todo.id}>
            {index} - {todo.name}
            <span className="px-2 border border-red-400 bg-red-400 rounded text-white" onClick={() => handleDeleteTodo(todo.id)}> X</span>
          </div>
        );
      })}
    </div>
  );
}

function mapStatetoProps(state) {
  return {
    count: store.getState().count.count,
  };
}

function mapDispatchtoProps(dispatch) {
  return {
    addTodo: (data) => store.dispatch(addTodoAction(data)),
    deleteTodo: (data) => dispatch(deleteTodoAction(data)),
  };
}

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
