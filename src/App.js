import './App.css';
import React, {useState} from 'react';



function App() {
  
    const [todos, setTodos] = useState([
      {name: "Walk dog", isPriority: true},
      {name: "Wash car", isPriority: false},
      {name: "Wash dog", isPriority: true}
    ]);

    const [newTodo, setNewTodo] = useState("");

    const todoNodes = todos.map((todo, index) => {
      return(
        <li key = {index} className={todo.isPriority ? "priority" : "not-priority"}>
        <span>{todo.name}</span>
        {todo.isPriority ? <span className='priority'>High Priority!</span> : <button onClick ={() => makePriority(index)}>Make Priority</button>}
        </li>
      );
    });

    const handleTodoInput = (event) => {
      setNewTodo(event.target.value);
    }

    const saveNewTodo = (event) => {
      event.preventDefault();
      const copyTodos = [... todos];
      copyTodos.push({name:newTodo, isPriority:false});
      setTodos(copyTodos);
      setNewTodo("");
    }

    const makePriority = (index) => {
      const copyTodos = [...todos];
      copyTodos[index].isPriority = true;
      setTodos(copyTodos);
    }

    return (


        <div className="App">
          <h1>ToDo's</h1>
          <hr></hr>
          <ul>
            {todoNodes}
          </ul>
          <form onSubmit={saveNewTodo}>
            <label htmlFor='new-todo'>Add New ToDo:</label>
            <input id='new-todo' type='text' value={newTodo} onChange={handleTodoInput}/>
            <input type='submit' value='Save Todo'/>
            </form>


    </div>
  );
}

export default App;
