import React from "react";

const TodoList = ({propsTodos}) => {
    return (
        /* Pseudo root element = Fragment */
        <> 
            <h1>List Todolist</h1>
            <ul>
                {propsTodos.map((v,i)=>{
                    return <li>{i}{v}</li>
                })}          
            </ul>
        </>
    )
}

export default TodoList