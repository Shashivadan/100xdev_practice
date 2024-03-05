import React, { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos").then(async (response) => {
        let data = await response.json();
        setTodos(data.todos);
        console.log(data.todos);
      });
    }, 1000);
  }, []);

  return (
    <div>
      {todos.map((todo) => {
        return (
          <Displaytodos
            key={todo.id}
            title={todo.title}
            description={todo.description}
            completed={todo.completed}
          />
        );
      })}
    </div>
  );
}

function Displaytodos({ title, description, completed }) {
  return (
    <div>
      <h5>{title}</h5>
      <p>{description}</p>
      <p>{completed}</p>
    </div>
  );
}
export default App;
