// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 3500);
//   });
// }

async function getData() {
  // let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let x = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    method: "POST",
    body: JSON.stringify({ username: "example" }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await x.json;
  console.log(data);
  return 455;
}

async function main() {
  console.log("Loading modules....");

  console.log("Do something else!!!");

  console.log("Load data");

  let data = await getData();

  console.log(data);

  console.log("Proccess Data");

  console.log("Task2");
}

main();

// data.then((v) => {
//     console.log(data);

//     console.log("Proccess Data")

//     console.log("Task2");
// })
