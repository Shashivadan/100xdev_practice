import React from "react";

export function Todo({ todos }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <button>
              {todo.completed === true ? "completed" : "Make as complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
