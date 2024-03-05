import { useState } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todo } from "./components/Todo";
import React from "react";

function App() {
  const [todos, setTodos] = useState([]);

  // fetch("http://localhost:3000/todos").then(async (res) => {
  //   const json = await res.json();
  //   setTodos(json.todos);
  // });

  return (
    <>
      <div>
        <h1>hii bro</h1>
        <CreateTodo></CreateTodo>
        <Todo todos={todos} />
      </div>
    </>
  );
}

export default App;
