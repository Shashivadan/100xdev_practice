type TodoType = {
  title: string;
  dis: strOrNum;
  id: number;
  status: "complete" | "incomplete";
};

type NewTodo = Pick<TodoType, "title" | "dis" | "status">;
type CreateTodo = Omit<TodoType, "id">; // opposite of Pick
