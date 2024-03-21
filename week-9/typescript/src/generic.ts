import { number } from "zod";

function identiy<T>(arg: T): T {
  return arg;
}

let example1 = identiy<string>("shashi");
let example2 = identiy<number>(2);

function elementOfArray<T>(arr: T[]) {
  return arr[0];
}

let example3 = elementOfArray<string>(["shashi", "the", "hello"]);
let example4 = elementOfArray<number>([1, 2, 3]);

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
