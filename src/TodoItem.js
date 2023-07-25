import { useState } from 'react';

export default function TodoItem({ todo, dispatch }) {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () =>  setIsEditing(true)

    const handleExitEditing = () => setIsEditing(false)

    // const handleCheckboxChange = () => {
    //     const updatedTodo = { ...todo, completed: !todo.completed };
    //     setTodos((currentTodos) =>
    //       currentTodos.map((currentTodo) => (currentTodo.id === updatedTodo.id ? updatedTodo : currentTodo)))
    
    // }

    // const handleTodoDelete = () => {
    //     setTodos((currentTodos) => currentTodos.filter((currentTodo) => currentTodo.id !== todo.id));
    // } 



    // const handleEditTextChange = (e) => {
    //     setTodos((currentTodos) => currentTodos.map((currentTodo) => currentTodo.id === todo.id ? {...currentTodo, text: e.target.value} : currentTodo))
    // }

    function handleCheckboxChange() {
        dispatch({ type: "CHECKBOX_TOGGLE", taskId: todo.id });
      }
    
      function handleTodoDelete(task) {
        dispatch({ type: "DELETE_TODO", taskId: todo.id });
      }
    
      function handleEditTextChange(e) {
        dispatch({ type: "EDIT_TEXT", taskId: todo.id, newText: e.target.value });
      }

        return (
            <li style={{
                display: "flex",
                gap: "3rem",
                padding: "1rem",
                color: todo.completed ? "darkgray" : "black",
            }}>
                <input type="checkbox" checked={todo.completed} onChange={handleCheckboxChange} />
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