type satisfiesTodo = {
  title: string;
  status: "complete" | "incomplete";
  dueDate: Date | string;
};

const satTodo = {
  title: "sjlkfj",
  status: "complete",
  dueDate: new Date(),
} satisfies satisfiesTodo;

satTodo.dueDate.setDate(3);
