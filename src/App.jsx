import TodoNew from "./components/todo/TodoNew";
import TodoData from "./components/todo/TodoData";
import "./components//todo/todo.scss";
import logo from "./assets/react.svg";
import { useState } from "react";

const App = () => {
  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Huy" },
    // { id: 2, name: "HCM" },
  ]);

  // const full = "Huy";
  // const age = 26;
  // const data = {
  //   address: "HCM",
  //   country: "Viet Nam",
  // };
  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name,
    };
    setTodoList([...todoList, newTodo]);
  };
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const deleteTodo = (id) => {
    const newTodo = todoList.filter(item => item.id !== id)
    setTodoList(newTodo);
  };
  return (
    <>
      <div className="todo-container">
        <div className="todo__title">
          <h2>Todo List</h2>
        </div>
        <TodoNew addNewTodo={addNewTodo} />
        {todoList.length > 0 ? (
          <TodoData todoList={todoList} 
          deleteTodo={deleteTodo} 
          />
        ) : (
          <div className="todo-img">
            <img src={logo} alt="" className="logo" />
          </div>
        )}

        {/* {todoList.length === 0 && (
          <div className="todo-img">
            <img src={logo} alt="" className="logo" />
          </div>
        )} */}
      </div>
    </>
  );
};

export default App;
