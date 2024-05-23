import { useEffect, useState } from "react";
import React from "react";

function App() {
  const [showComponent, setShowComponent] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setShowComponent((prev) => !prev);
    }, 1000);
    return;
  }, []);

  return <>{showComponent && <ComponentMountAndUnmount />}</>;
}

function ComponentMountAndUnmount() {
  useEffect(() => {
    console.log("mounted");
    return () => {
      console.log("unmouted");
    };
  }, []);

  return (
    <>
      <div>
        <h1>hii how are you i am fine</h1>
      </div>
    </>
  );
}

export default App;
