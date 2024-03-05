import React from "react";

function Dashboard() {
  return (
    <div>
      <Component1>
        <Component2></Component2>
        <Component3></Component3>
      </Component1>
    </div>
  );
}

function Component1({ children }) {
  return <>{children}</>;
}
function Component2() {
  return <h1>djflkjf</h1>;
}
function Component3() {
  return <h1>djflkjjdhgfshgdf</h1>;
}

export default Dashboard;
