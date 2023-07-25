import { useState, useRef, useEffect } from "react";



export default function AddTodo( {addTodo, dispatch} ) {
    const [todo, setTodo] = useState("");
    const ref = useRef(null); 

    useEffect(() => {
        ref.current.focus();
    },[]);
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (todo) {
            dispatch({ type: "ADD_TODO", text: todo })
            setTodo("");
        }
    }

    const handleTodoChange = (e) => {
        setTodo(e.target.value)
    }

    const handleClearAll = () => {
        dispatch({ type: "CLEAR_ALL" });
    }

 
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={todo} onChange={handleTodoChange} ref={ref}/>
            <button type="submit" style={{margin: "0 2rem 0 2rem"}}>Add</button>
            <button style={{marginBottom: "2rem"}} onClick ={handleClearAll}>Clear All</button>
        </form>
    )
}