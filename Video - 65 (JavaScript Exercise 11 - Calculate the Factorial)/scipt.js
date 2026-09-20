let num = prompt("Enter a number: ");
let factorial = 1;
let factorial2 = [];

for (let i = 0; i < num; i++) {
  factorial = factorial * (num - i);
  factorial2.push(num - i);
}

function factorialArr(a, b) {
  return a * b;
}

console.log(factorial);
console.log(factorial2.reduce(factorialArr));
