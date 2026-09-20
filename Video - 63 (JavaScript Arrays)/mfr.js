let arr = [1, 55, 3, 22, 5, 9, 100];
// let newArr= [];

// for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i] ** 2);
// }
// console.log(newArr);

// let newArr = arr.map(e=>{
//     return e**2;
// })
// console.log(newArr);

// const graterThanSeven = (e) => {
//   if (e > 7) {
//     return true;
//   } else {
//     return false;
//   }
// };

// let newArr = arr.filter(graterThanSeven);
// console.log(newArr);

let arr2 = [1,2,3,4,5,6,7];
const multiply = (a,b) => {
    return a*b;
}

console.log(arr2.reduce(multiply));