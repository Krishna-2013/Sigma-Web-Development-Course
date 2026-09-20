let num = [1, 2, 2, 3, 4];
let dubArr = [];

let x = 0;
let y = 1;
let first;
let second;

num.forEach((el) => {
  try {
    if (num[x] === num[y]) {
        let index = Math.floor(Math.random() * 2) + 1;
        if(index === 1) {
            dubArr.push(el*2);
            first = true;
        } else {
            dubArr.push(el);
            dubArr.push(num[y]*2);
            second = true;
        }

    } else if (first) {
        dubArr.push(el);
        first = false;
    } else if (second) {
        second = false;
    } 
    else {
        dubArr.push(el*2);
    }
  } catch (err) {
    console.log(err);
  }
  x++;
  y++;
});

console.log(dubArr);
