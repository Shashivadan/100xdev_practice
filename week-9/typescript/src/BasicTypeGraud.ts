import { string } from "zod";

type TodoGaurd = {
  title: string;
  date: Date | string;
  discrepetion: string;
  status: "completed" | "incomplete";
};

function showTodo(todo: TodoGaurd) {
  if (todo.date instanceof Date) {
    todo.date.getDate();
  } else {
    todo.date.toLowerCase();
  }

  switch (todo.status) {
    case "completed":
      console.log("c");
      break;
    case "incomplete":
      console.log("ic");
      break;

    default:
      const neverAndEver: never = todo.status;
      return neverAndEver;
  }
}
