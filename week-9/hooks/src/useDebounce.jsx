import React, { useState } from "react";
import { useDebounce } from "./hooks/useDebouce";

function App() {
  const [value, setValue] = useState("");
  const search = useDebounce(value, 5000);

  return (
    <div>
      <h1>useDebouce value is {search}</h1>
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="enter a name or search any thing"
      />
    </div>
  );
}

export default App;
