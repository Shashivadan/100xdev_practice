import React, { useState } from "react";
import { useInterval } from "./hooks/useInterval";

function App() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount((count) => count + 1);
  }, 2);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
