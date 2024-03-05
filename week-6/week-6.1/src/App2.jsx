import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [pivot, setPivot] = useState(1);
  return (
    <>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={() => setPivot(1)}>1</button>
        <button onClick={() => setPivot(2)}>2</button>
        <button onClick={() => setPivot(3)}>3</button>
        <button onClick={() => setPivot(4)}>4</button>
      </div>
      <Todo id={pivot}></Todo>
    </>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    axios
      .get(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then((response) => {
        console.log(response.data.todo);
        setTodo(response.data.todo);
      });
  }, [id]);
  return (
    <>
      <div>
        <h1>{todo.title}</h1>
        <p>{todo.description}</p>
      </div>
    </>
  );
}

export default App;
