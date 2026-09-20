let arr = [1, 2, -1, 3, 4, 5];
let sum = 0;

for(let i = 0; i<arr.length; i++) {
    num = arr[i];
    if (num < 0) {
        break;
    } else {
        sum = sum + num;
    }
}
 
console.log(sum);
