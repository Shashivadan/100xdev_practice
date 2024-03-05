// @ts-nocheck
import React from "react";
import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => {
          setTitle(e.target.value);
          console.log(e.target.value);
        }}
      />
      <input
        type="text"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        placeholder="description"
      />

      <button
        onClick={() => {
          fetch("http://localhost:3000/newtodo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
              completed: "false",
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }).then(async (res) => {
            const data = await res.json();
            alert(data);
          });
        }}
      >
        create todo
      </button>
    </div>
  );
}
