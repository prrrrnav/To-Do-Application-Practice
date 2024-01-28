import Header from './Components/Header';
import Info from './Components/Info';
import { useState } from "react";
import Todo from './Components/Todo';
import TodoList from './Components/TodoList';
// import Form from './Components/Form';

function App() {
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])
  return (
    <div className="App">
      <Header></Header>
      <Info 
        todo={todo}
        setTodo={setTodo} 
        todoList={todoList} 
        setTodoList={setTodoList}
        ></Info>
        <TodoList setTodoList={setTodoList} todoList={todoList}/>
      {/* <Form></Form> */}
    </div>
  )
}

export default App;
