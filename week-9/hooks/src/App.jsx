import React, { useState } from "react";
import { useWindowSize } from "./hooks/useWindowSize";

function App() {
  const windowSize = useWindowSize();

  return (
    <div>
      hight : {windowSize?.hight} , width : {windowSize?.width}
    </div>
  );
}

export default App;
