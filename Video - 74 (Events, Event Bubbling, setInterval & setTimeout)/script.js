const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    alert("The button clicked");
    document.querySelector(".box").innerText = "The box content changed";
    document.querySelector(".box").style.backgroundColor = "blue";
})

btn.addEventListener("contextmenu", () => {
    alert("Don't try to hack us!!!");
})

document.addEventListener("keydown", (e) => {
    console.log(`The key obj is ${e}`);
    console.log(`The key name is ${e.key}`);
    console.log(`The key code is ${e.keyCode}`);
})