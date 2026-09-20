let arr = [1, 2, 3, 4, 5];

function multipy(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 500);
  });
}

arr.forEach((num) => {
  main(num);
});

async function main (num) {
  const res = await multipy(num);
  console.log(res);
}
