import React from "react";

function App() {
  return (
    <div>
      <WapperComponent>
        <WapperComponent>
          <DummyComponent />
        </WapperComponent>
      </WapperComponent>
    </div>
  );
}

function DummyComponent() {
  return <h1>shahsi fjsjfhdjh</h1>;
}

function WapperComponent({ children }) {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "2rem",
        borderRadius: "2rem",
      }}
    >
      {children}
    </div>
  );
}

export default App;
