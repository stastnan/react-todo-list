import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

function App() {
  const [todos, setTodos] = useState([]);
  const [idCounter, setIdCounter] = useState(1);
  const [todo, setTodo] = useState({
    text: "",
    id: idCounter,
    completed: false,
  })

  const addTodo = () => {
    if (todo.text !== "") {
      const newTodo = {
        ...todo,
        id: idCounter,
        completed: false,
      }

      setTodos((currentTodos) => [...currentTodos, newTodo]);
      
      setTodo({
        text: "",
        id: idCounter + 1,
        completed: false,
      })
      setIdCounter((currentIdCounter) => currentIdCounter + 1);  
  }
  }



  return (
    <div className="wrapper">
      <h1>My To-do list</h1>
      <AddTodo addTodo={addTodo} todo={todo} setTodo={setTodo} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos} setTodo={setTodo} />
    </div>
  );
}

export default App;
