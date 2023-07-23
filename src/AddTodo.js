export default function AddTodo( {addTodo, todo, setTodo, setTodos } ) {
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo();
    }

    const handleTodoChange = (e) => {
        setTodo({...todo, text: e.target.value})
    }

    const handleClearAll = () => {
        setTodos([])
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={todo.text} onChange={handleTodoChange}/>
            <button type="submit" style={{margin: "0 2rem 0 2rem"}}>Add</button>
            <button style={{marginBottom: "2rem"}} onClick ={handleClearAll}>Clear All</button>
        </form>
    )
}