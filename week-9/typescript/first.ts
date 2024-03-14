const x: number = 1;
const y: string = "hello";
console.log(x, y);

// types in typescript strings, numbers, booleans, arrays, objects, etc.

function Hello(name: string) {
  console.log("hello", name);
}

function sum(a: number, b: number): number {
  return a + b;
}

console.log("first", sum(1, 2));

function isLegal(age: number): boolean {
  if (age > 18) {
    return true;
  }
  return false;
}

console.log(isLegal(48));

const arr: (string | number)[] = ["shsashi", 1, 2, 3];

arr.push("shashi");

console.log("first", arr[0]);

const ob: object = {
  name: "shashi",
};

Hello("world");

let any: any = "shashi"; // big no for "any"  and fetch request gives any /

//every impotent
type PersonName = {
  name: string;
  age: number;
  iscoder?: boolean;
  fav: (string | number)[];
};

const iscoder: boolean = true;

const person: PersonName = {
  name: "shsahi",
  age: 22,
  iscoder,
  fav: ["shashi", "vadan", 1, 3, 3],
};

interface StudentType {
  name: string;
  PNo: number;
  skills?: {
    ptyhon?: boolean;
  };
}

const student: StudentType = {
  name: "shashivadan",
  PNo: 6281373269,
};

console.log("student", student);

function logName(name: string): void {
  console.log(name);
}

function names(r: string): string {
  return r;
}

type Names = {
  hello: string;
  nn?: string;
  hu: number;
};

const hehe: Names = {
  hello: "shsahsi",
  hu: 43,
};

type Option = { debug?: boolean; logLevel?: number };

function printLogS(
  name: string,
  { debug = false, logLevel }: Option = {}
): void {
  console.log(name, debug, logLevel);
}

printLogS("shashi", { debug: true, logLevel: 33 });

function arrChar(...arr: (string | number)[]) {
  console.log(arr);
}

function sumWithCallback(a: number, b: number, sumLog: (sum: number) => void) {
  sumLog(a + b);
}

sumWithCallback(1, 2, (sum) => {
  console.log(sum);
});

const id: number | string | undefined = "shashi";

type Person = {
  isProgrammer: boolean | undefined;
  id: number | string;
};

type Todo = {
  title: string;
  dis: string;
  status: "complete" | "incompeleted";
};

const todo1: Todo = {
  title: "home",
  dis: "goto home early",
  status: "complete",
};

let todoPerson: Todo | Person;

type PersonDetial = {
  name: string;
  age: number;
};

type PersonID = PersonDetial & {
  readonly id: string;
};

const pDetails: PersonDetial = {
  name: "shashi",
  age: 22,
};

const pDetailsWithID: PersonID = {
  name: "shashi",
  age: 21,
  id: "23453",
};

interface Todos {
  title: string;
  disp: string;
}

interface Status {
  status: "complete" | "incomplete";
}

interface Todolist extends Todos, Status {}

type num = readonly number[];
let strNumarr: readonly (string | number)[] = [1, 2, 3, 4.5];

let numArr: num = [23, 45, 6, 7, 8];
