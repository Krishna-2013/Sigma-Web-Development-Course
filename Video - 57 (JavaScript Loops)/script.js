console.log("JavaScript Loops: ");

let a = 1;

// console.log(a);
// console.log(a+1);
// console.log(a+2);
// console.log(a+3);

for (let i = 0; i < 10; i++) {
    console.log(a+i);
}

let obj = {
    name : "Krishna",
    Id : 201240,
    Dream : "Web Developer",
}

// for (const key in obj) {    
//     console.log(key);
// }

for (const key in obj) {    
    const element = obj[key]; // filter the value
    console.log(key, element);
}

let i2 = 0

while (i2<6) {
    console.log(i2);
    i2++
}

let i3 = 0;
do {
    console.log(i);
    i++
} while (i<6);