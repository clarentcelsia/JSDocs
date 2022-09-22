import React from "react";

// Functional Component
const TodoForm = ({pTodos}) => {
    // Use state for input
    const [getInput, setInput] = React.useState("");

    const inputOnChange = (event) => {
        // event.preventDefault()
        setInput(event.target.value)
    }

    const onSubmitHandler = (event) => {
        // remove default setting set by browser
        event.preventDefault();
        pTodos(getInput);
        setInput("")
    }

    return (
        // "HTML"
        <form action="" onSubmit={onSubmitHandler}>

        <div style={{marginBottom:"0.5em"}}>
            <label htmlFor="todo-input">Input</label>
            <input type="text" id="todo-input" name="todo-input" value={getInput} onChange={inputOnChange} />
        </div>
        <div>
            <button type="submit">Add</button>
        </div>

        </form>
    )
}

export default TodoForm