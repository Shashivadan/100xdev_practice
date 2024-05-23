import { date, number, string } from "zod";

function identiy<T>(arg: T): T {
  return arg;
}

let example1 = identiy<string>("shashi");
let example2 = identiy<number>(2);

function elementOfArray<T>(arr: T[]) {
  return arr[0];
}

type GenericPerson = {
  name: string;
  age: number;
  readonly isProgrammer: boolean;
};

let example3 = elementOfArray<string>(["shashi", "the", "hello"]);
let example4 = elementOfArray<number>([1, 2, 3]);
let example10 = elementOfArray<GenericPerson>([
  { name: "slkfjdsl", age: 32, isProgrammer: true },
  { name: "slkfjdsl", age: 32, isProgrammer: true },
]);

console.log(example10.isProgrammer);

console.log(example3.toUpperCase());

let example5 = elementOfArray<string | number>(["shashi", 22, 33, "vadam"]);

interface User {
  name: string;
  age?: number;
}

let example6 = elementOfArray<User>([
  { name: "shashi", age: 55 },
  { name: "vadan" },
]);

console.log(example6);

type APIresp<TData = { status: number }> = {
  // set a generic default values
  data: TData;
  isError: boolean;
};

type DataSpecific = APIresp<{ name: string; age: number }>;
type DataGenericArray = APIresp<Array<number>>;

const resp: DataSpecific = {
  data: { name: "shashi", age: 23 },
  isError: false,
};

const resArrayData: APIresp<Array<number>> = {
  data: [234567, 5678],
  isError: false,
};

const numArray: Array<number> = [1, 23, 4, 4, 5, 5, 5, 6];

const objArray: [string, any][] = [
  ["ksey", 1],
  ["kesy", 2],
  ["keyd", 3],
];

type ObjArr<T> = [string, T][];

function AtoO<T>(arr: ObjArr<T>) {
  const obj: {
    [index: string]: T;
  } = {};

  arr.forEach(([key, value]) => {
    obj[key] = value;
  });

  return obj;
}

console.log(AtoO(objArray));
