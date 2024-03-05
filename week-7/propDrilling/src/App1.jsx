import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Counts count={count} setCount={setCount} />
    </>
  );
}

// porp drilling

function Counts({ count, setCount }) {
  return (
    <div>
      {count}
      <Buttons count={count} setCount={setCount} />
    </div>
  );
}
function Buttons({ count, setCount }) {
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count +1
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        count -1
      </button>
    </div>
  );
}
export default App;
