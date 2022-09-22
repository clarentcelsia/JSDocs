import React from "react";

// let counter = 0;

const TodoCounter = () => {
    // EventHandler + state
    // This returns a value and a function to update it.
    const [getCounter, setCounter] = React.useState(0);

    function ButtonHandler() {
        setCounter(getCounter + 1);
    }
    // render
    return (
        <>
            <div id="counter_label">{counter}</div>
            <div>
                <button onClick={ButtonHandler}>ADD</button>
            </div>
        </>
    )
}

export default TodoCounter