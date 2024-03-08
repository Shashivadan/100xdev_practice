import { number, string } from "zod";

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
