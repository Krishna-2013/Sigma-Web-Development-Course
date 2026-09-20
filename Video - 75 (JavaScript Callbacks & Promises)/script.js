console.log("Krishna is a hacker");
console.log("Rife is a hecker");

setTimeout(() => {
  console.log("I am inside timeout 2 sec");
}, 2000);

setTimeout(() => {
  console.log("I am inside timeout 0 sec (1)");
}, 0);

setTimeout(() => {
  console.log("I am inside timeout 0 sec (2)");
}, 0);

console.log("The end");

// callback = (arg) => {
//   console.log(arg);
// };

// const loadScript = (src, callback) => {
//   let sc = document.createElement("script");
//   sc.src = src;
//   sc.onload = callback("Krishna");
//   document.head.append(sc);

// };

// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)

// CallBack:

function welcome (name) {
    console.log(`Hello ${name}`);
}

function Name (callback) {
    callback("Krishna");
}

Name(welcome);

// akta function (1) ke onno akta function (2) er name (without ()) diye call kora jate function(1) jokhon icca tokhon jsut function (2) er arguement diye call korte pare.