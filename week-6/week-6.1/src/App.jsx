import React, { useEffect, useMemo, useState } from "react";

function App() {
  return (
    <div>
      <InputCompnenont></InputCompnenont>
    </div>
  );
}

function InputCompnenont() {
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(0);

  let acc = useMemo(() => {
    let acc = 0;
    for (let i = 1; i <= value; i++) {
      acc += i;
    }
    return acc;
  }, [value]);

  return (
    <>
      <input type="text" onChange={(e) => setValue(parseInt(e.target.value))} />
      <p>some of {acc}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        button count {count}{" "}
      </button>
    </>
  );
}
export default App;
