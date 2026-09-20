console.log(document.querySelector(".container").innerHTML);
console.log(document.querySelector(".container").innerText);
console.log(document.querySelector(".container").outerHTML);
console.log(document.querySelector(".container").tagName); //For Element
console.log(document.querySelector(".container").nodeName); //For Nodes (Text, comment, etc)
console.log(document.querySelector(".container").textContent);

// document.querySelector(".container").hidden = true;
document.querySelector(".box").innerText = "Hi my name is Krishna";

console.log(document.querySelector(".box").hasAttribute("style"));
console.log(document.querySelector(".box").getAttribute("style"));
document.querySelector(".box").setAttribute("style", "display: inline") //It only will be set on the first box
document.querySelector(".box").removeAttribute("style");
document.querySelector(".box").dataset


let div = document.createElement(div);
div.innerText = "This div is created <b>by</b>"


