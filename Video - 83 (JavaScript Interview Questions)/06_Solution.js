let vowels = ["a", "e", "i", "o", "u"];

let str = "Krishna";
let vCount = 0;

for (let i = 0; i < str.length; i++) {
  if (vowels.includes(str[i].toLowerCase())) {
    vCount++;
  }
}
console.log(vCount);
