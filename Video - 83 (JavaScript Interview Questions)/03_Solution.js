let str = "abc";
let reverseStr = "";

function revStr () {
    
}

for (let i = 0; i < str.length; i++) {
    let index = (str.length - i)-1;
    reverseStr += str[index];
}

let newStr = str + reverseStr;
console.log(newStr);
