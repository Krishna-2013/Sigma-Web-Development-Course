function nice(name) {
    console.log("Hey " + name);
    console.log(name + " is a good student");
    console.log(name + " is also a good coder");
}

// console.log("Hey Krishna!");
// console.log("You are a good student");
// console.log("You are a also a good coder");

nice("Krishna");

function sum(a, b) {
    return a+b;
}

result = sum(3,5);

console.log("Your result is ", result);

const func1 = (x) => {
    console.log("I am an arrow function", x);
}

func1(33);