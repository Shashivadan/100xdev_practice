import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then((response) => {
        console.log(response.data.todo);
        setTodos(response.data.todo);
      });
  }, [id]);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="enter to id "
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <Todo title={todos.title} description={todos.description}></Todo>
      </div>
    </>
  );
}

function Todo({ title, description }) {
  return (
    <>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </>
  );
}

export default App;
