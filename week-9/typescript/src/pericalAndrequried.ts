type PerTodo = {
  title: string;
  dispriction?: string;
  status: "complete" | "incomplete";
  id: number;
};

type todoPer = Required<PerTodo>;

type todoparls = Partial<Pick<PerTodo, "title">>;
type TodoRequired = Required<Pick<PerTodo, "title">> & PerTodo;

type requried<T, key extends keyof T> = Required<Pick<T, key>> & T;

type todoparser = requried<PerTodo, "title">;

const todoser: todoparser = {
  title: "dlkafjld",
  dispriction: "djfadlf",
  status: "complete",
  id: 34434,
};
