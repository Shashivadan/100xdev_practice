const x: number = 1;
const y: string = "hello";
console.log(x, y);

// types in typescript strings, numbers, booleans, arrays, objects, etc.

function Hello(name: string) {
  console.log("hello", name);
}


function 

function sum(a: number, b: number): number {
  return a + b;
}
Q
console.log("first", sum(1, 2));

function isLegal(age: number): boolean {
  if (age > 18) {
    return true;
  }
  return false;
}

console.log(isLegal(48));

Hello("world");
