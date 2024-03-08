"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const x = 1;
const y = "hello";
console.log(x, y);
// types in typescript strings, numbers, booleans, arrays, objects, etc.
function Hello(name) {
    console.log("hello", name);
}
function sum(a, b) {
    return a + b;
}
console.log("first", sum(1, 2));
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    return false;
}
console.log(isLegal(48));
const arr = ["shsashi", 1, 2, 3];
arr.push("shashi");
console.log("first", arr[0]);
const ob = {
    name: "shashi",
};
Hello("world");
let any = "shashi"; // big no for "any"  and fetch request gives any /
const iscoder = true;
const person = {
    name: "shsahi",
    age: 22,
    iscoder,
    fav: ["shashi", "vadan", 1, 3, 3],
};
const student = {
    name: "shashivadan",
    PNo: 6281373269,
};
console.log("student", student);
function logName(name) {
    console.log(name);
}
