import { useState } from "react";

const TodoNew = (props) => {
  const [valueInput, setValueInput] = useState("");

  const { addNewTodo } = props;

  const handleClick = () => {
   addNewTodo(valueInput);
   setValueInput("");
  };
  const handleChange = (name) => {
    setValueInput(name);
  };
  return (
    <>
      <div className="task">
        <input
          type="text"
          placeholder="Enter your task"
          className="task__input"
          onChange={(event) => handleChange(event.target.value)}
          value={valueInput}
        />
        <button className="task__btn" onClick={handleClick}>
          Add
        </button>
        <div>My test input is = {valueInput}</div>
      </div>
    </>
  );
};
export default TodoNew;
