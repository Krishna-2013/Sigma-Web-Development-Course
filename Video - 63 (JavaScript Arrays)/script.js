let arr = [1, 2, 4, 5, 7];
let arr2 = ["one", "two", "nine"];
// Index = 0 ,1 ,2 ,3 ,4
arr[0] = 5600;
console.log(arr);
console.log(arr.length);
console.log(arr[1]); //Prints the second element;


console.log(arr.toString());
console.log(arr.join(" and "));

// console.log(arr.pop());
// console.log(arr.shift());

// console.log(arr.push("Krishna"));
// console.log(arr.unshift("krishna"));

console.log(arr.concat(arr2));  // Do not change the existent array.