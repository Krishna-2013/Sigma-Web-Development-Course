console.log("JavaScript Conditionals: if, else if, else ladder");

let age = 18;
// let grace = 2;

// Arithmetic Operators:
/*
console.log(age + grace);   // Addition Operators
console.log(age - grace);   // Subtraction Operators
console.log(age * grace);   // Multiplication Operators
console.log(age / grace);   // Division Operators
console.log(age ** grace);  // Exponentiation Operators
console.log(age % grace);   // Modulus Operators
*/

// Assignment Operator:
/*
age += grace; // Increment
age -= grace; // Decrement Assignment Operator
age *= grace; // Multiplication Assignment Operator
age /= grace; // Division Assignment Operator
age **= grace; // Exponentiation Assignment Operator
age %= grace; // Modulus Assignment Operator
*/

// Comparison Operators:
/*
    == ;    Equal to (Compare only value.)
    != ;    Not Equal to (Compare only value.)
    === ;   Equal value and type (Compare value and type both.)
    !== ;   Not Equal value or Not Equal type (Compare value and type both.)
    >   ;   Greater than
    <   ;   Less than
    >=  ;   Greater than or Equal to
    <=  ;   Less than or Equal to
*/

// Ternary Operator:
//  ?

// Logical Operators:
/*
    && ; Logical and
    || ; Logical or
    ! ; Logical not
*/

if (age == 18) {
  console.log("You can drive.");
} else if (age <= 0) {
  console.log("Are you kidding?.");
} else {
  console.log("You can't dive.");
}