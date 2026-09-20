console.log("JavaScript - Selecting by Ids, Classes, and More");

// let krishnas = document.getElementsByClassName("box");
// console.log(krishnas);

// krishnas[2].style.backgroundColor = "red";

// document.getElementById("3rd").style.backgroundColor = "red";

// document.querySelector(".box").style.backgroundColor = "green";

document.querySelectorAll(".box").forEach((e) => {
    e.style.backgroundColor = "Green";
});


