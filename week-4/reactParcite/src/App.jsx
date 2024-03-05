import React, { useState } from "react";
// import Product from "./product";
import Exp from "./exp";

function App() {
  var [count, setCount] = useState(0);
  var [name, setName] = useState("shahsi");

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>{name}</h1>
      <CustomButton
        count={count}
        setCount={setCount}
        shashi={"hsdashd"}
      ></CustomButton>
      <Exp></Exp>
    </>
  );
}

function CustomButton(props) {
  function increment() {
    props.setCount(props.count + 1);
  }

  return (
    <button onClick={increment} className="text-white">
      {" "}
      counter {props.shashi} {props.count}{" "}
    </button>
  );
}

export default App;
