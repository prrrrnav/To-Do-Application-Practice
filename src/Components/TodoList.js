import Todo from "./Todo";

const TodoList = ({ todoList, setTodoList }) => {
  return (
    <div>
      {todoList.map((todoItem) => (
        <Todo setTodoList={setTodoList} todoList={todoList} key={todoItem.id} todoItem={todoItem}></Todo>
      ))}
    </div>
  );
};
export default TodoList;
