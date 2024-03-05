import { useState } from "react";

import "./App.css";

let counter = 3;
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "1 shjskn",
      deprecation: "jfjdsgfhdsgfjsdk",
    },
    {
      id: 2,
      title: "1 suhjhjskn",
      deprecation: "jgsgsgfjdsgfhdsgfjsdk",
    },
  ]);

  function addNewtodo() {
    setTodos([
      ...todos,
      {
        id: counter++,
        title: "shhai",
        deprecation: "kdshfljkdgfhkahj",
      },
    ]);
  }

  return (
    <>
      <button onClick={addNewtodo}> add new todo</button>
      {todos.map((todo) => {
        return (
          <Todo
            title={todo.title}
            key={todo.id}
            deprecation={todo.deprecation}
          ></Todo>
        );
      })}
    </>
  );
}

function Todo({ title, deprecation }) {
  return (
    <div>
      <h4>{title}</h4>
      <p>{deprecation}</p>
    </div>
  );
}

export default App;
