const TodoData = (props) => {
  const { todoList, deleteTodo } = props;
  const handleClick = (id) => {
    deleteTodo(id)
  }
  return (
    <>
      <div className="todo-data">
        {todoList.map((item, index) => {
          console.log("check map", item, index);
          return (
            <div className={`todo-item`} key={item.id} style={{ display: "flex", justifyContent: "space-between" }}>
              <div  >
                {item.name}
              </div>
              <button onClick={()=>handleClick(item.id)}>Delete</button>
            </div>
          );
        })}
        <div>{JSON.stringify(props.todoList)}</div>
      </div>
    </>
  );
};
export default TodoData;
