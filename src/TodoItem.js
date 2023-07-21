import { useState } from 'react';

export default function TodoItem({ todo, setTodos, setTodo }) {
    
    const TodoItemStyle = {
        display: "flex",
        gap: "3rem",
        padding: "1rem",
        textDecoration: todo.completed ? "line-through" : "none",
        color: todo.completed ? "darkgray" : "black",
    }

    const handleCheckboxChange = () => {
        const updatedTodo = { ...todo, completed: !todo.completed };
        setTodos((currentTodos) =>
          currentTodos.map((currentTodo) => (currentTodo.id === updatedTodo.id ? updatedTodo : currentTodo)))
    
    }

        return (
            <li style={TodoItemStyle}>
                <input type="checkbox" checked={todo.completed} onChange={handleCheckboxChange}/>
                    <>
                         {todo.text}

                    </>


                    {/* <button>Edit</button>

                    <button>Delete</button> */}


                
            </li>
        )
}