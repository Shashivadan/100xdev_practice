"use strict";
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
Hello("world");
