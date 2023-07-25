import TodoItem from "./TodoItem";

export default function TodoList({ todos, dispatch }) {
    return (
        <ul 
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "space-between"
            }}
        >
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
            ))}
        </ul>
    );
}