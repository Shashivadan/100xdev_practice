import "./App.css";

function App() {
  return (
    <>
      <TodoRender
        todos={{ title: "shashi", discription: "dfjkafl", doen: false }}
      />
    </>
  );
}

interface Todostypes {
  title: string;
  discription: string;
  doen: boolean;
}

interface Topedoes {
  todos: Todostypes;
}

function TodoRender({ todos }: Topedoes) {
  return (
    <>
      <h1>{todos.title}</h1>
      <p>{todos.discription}</p>
    </>
  );
}

export default App;
