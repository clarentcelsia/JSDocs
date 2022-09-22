import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

import TodoList from './components/ToDoList';
import TodoForm from './components/ToDoForm';
import TodoCounter from './components/ToDoCounter';

function App() {
  const [todos, setTodos] = useState([
    "Studying",
    "Eating"
  ]);

  const addTodos = (todo) => {
    console.log(todo);
    // Copy todos then adding it with new todo
    setTodos([...todos, todo])
  }

  return (
    <div className="App">
      <section>
        <TodoCounter/>
      </section>

      <section>
        <TodoForm pTodos={addTodos}/>
        {/* Create a prop as a param in TodoList*/}
        <TodoList propsTodos={todos}/>
      </section>
    </div>
  );
}

export default App;
