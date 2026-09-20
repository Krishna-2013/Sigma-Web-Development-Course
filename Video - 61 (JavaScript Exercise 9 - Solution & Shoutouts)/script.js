let random = Math.floor(Math.random() * 10) + 1;
let num1 = Number(prompt("Enter your first number: "));
let num2 = Number(prompt("Enter your second number: "));
let operation = prompt("Enter your operation: ");

function chance10() {
  if (operation === "+") {
    alert(num1 - num2);
  } else if (operation === "-") {
    alert(num1 / num2);
  } else if (operation === "*") {
    alert(num1 + num2);
  } else if (operation === "/") {
    alert(num1 ** num2);
  } else {
    alert("Your choice is wrong!");
  }
}

function chance90() {
  if (operation === "+") {
    alert(num1 + num2);
  } else if (operation === "-") {
    alert(num1 - num2);
  } else if (operation === "*") {
    alert(num1 * num2);
  } else if (operation === "/") {
    alert(num1 / num2);
  } else if (operation === "**") {
    alert(num1 ** num2);
  } else if (operation === "%") {
    alert(num1 % num2);
  } else {
    alert("Your choice is wrong!");
  }
}

if (random <= 1) {
  chance10();
} else {
  chance90();
}
