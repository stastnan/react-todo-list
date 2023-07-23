import { useState } from 'react';

export default function TodoItem({ todo, setTodos, setTodo }) {
    
    const TodoItemStyle = {
        display: "flex",
        gap: "3rem",
        padding: "1rem",
        color: todo.completed ? "darkgray" : "black",
    }

    const handleCheckboxChange = () => {
        const updatedTodo = { ...todo, completed: !todo.completed };
        setTodos((currentTodos) =>
          currentTodos.map((currentTodo) => (currentTodo.id === updatedTodo.id ? updatedTodo : currentTodo)))
    
    }

    const handleTodoDelete = () => {
        setTodos((currentTodos) => currentTodos.filter((currentTodo) => currentTodo.id !== todo.id));
    } 


    const [isEditing, setIsEditing] = useState(false);
    const handleEditClick = () =>  setIsEditing(true)
    const handleExitEditing = () => setIsEditing(false)

    const handleEditTextChange = (e) => {
        setTodos((currentTodos) => currentTodos.map((currentTodo) => currentTodo.id === todo.id ? {...currentTodo, text: e.target.value} : currentTodo))
    }

        return (
            <li style={TodoItemStyle}>
                <input type="checkbox" checked={todo.completed} onChange={handleCheckboxChange}/>
                {isEditing ? (
                    <>
                         <input type="text" value={todo.text} onChange={handleEditTextChange} />
                         <button onClick={handleExitEditing}>Save</button>
                    </>
                ) : (
                    <span style={{textDecoration: todo.completed ? "line-through" : "none",}}>{todo.text}</span>
                )}
                
                {!isEditing && !todo.completed && (
                    <button onClick={handleEditClick}>Edit</button>
                )}

                {!isEditing && (
                    <button onClick = {handleTodoDelete}>Delete</button> 
                )}

            </li>
        )
}