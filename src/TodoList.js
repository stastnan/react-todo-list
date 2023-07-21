import { useState } from 'react'
import TodoItem from "./TodoItem";

export default function TodoList({ todos, setTodos, setTodo }) {
    

 

    return (
        <ul style={{display: "flex", flexDirection: "column", alignItems: "space-between"}}>
            {todos.map((todo) => <TodoItem key={todo.id} todo={todo} setTodos={setTodos} setTodo={setTodo} />)}
        </ul>
    )
}