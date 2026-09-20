// console.log(), To print something.
console.log("JavaScript Variables, Data Types & Objects: ");

// var , To define a variable in old JS.
var a = 5;
var b = 6;
var c = "Krishna";
var _a_ = "Rife";
// var 55a = "Sudipto"; (Invalid)

// let , To define a variable in modern JS instead var.
let a1 = 3;

// const , To define a constant variable.
const a2 = 5;

console.log(a + b);

// typeof(), To get the type of anything.
console.log(typeof a, typeof b, typeof c);

// var variable values can be changed.
a = a + 1;
console.log(a + b);

// constant variable values can't be changed.
// a2 = a2 +1;
// console.log(a2);

{
  console.log("Difference between var and let: ");
  var a = 10; // Function scope
  let a1 = 6; // Block scope

  console.log("Inside a block: ");
  console.log("var: " + a);
  console.log("let: " + a1);
}
console.log("Outside a block: ");
console.log("var: " + a);
console.log("let: " + a1);

console.log("var → function scope, let → block scope.");

let x = "Krishna";
let y = 22;
let z = 3.44;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

let o = {
  name: "Krishna",
  "job role": "Web developer",
};

console.log(o);

o.salary = "100 cores";
console.log(o);
