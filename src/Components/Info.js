import styles from "../style.module.css";
import shortid from 'shortid';

export default function Info({ todo, setTodo, todoList, setTodoList }) {
  const handleChange=(event)=>{
    setTodo(event.target.value)
    console.log(todo)
  }
  const handleSubmit =(event) =>{ 
    event.preventDefault();
    setTodoList([...todoList,{name:todo,id:shortid.generate()}])
    console.log(todoList);
    setTodo("");
  } 
    return (
    <div className={styles.todoform}>
      <form onSubmit={handleSubmit}>
        <input
          value={todo}
          onChange={handleChange}
          className={styles.todoinput}
          type="text"
          placeholder="Add todo item"
        ></input>
        <button type="submit" className={styles.todobutton}>Add</button>
      </form>
    </div>
  );
}

// export default Info;
