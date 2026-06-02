let money = Math.ceil(Math.random() * 50);
// ternary operator / conditional operator
let isMoney = Math.random() < 1 / 2 ? true : false;

// use case of if Statement + Nested if
if (isMoney) {
  if (money < 25) {
    console.log("chiya khau");
  } else {
    console.log("Coke khau");
  }
} else {
  console.log("No Money");
}

// use case of switch case
const operation = prompt("Choose Arithmetic Operation (+, -, *, /, %)");
let val1 = Number(prompt("First value"));
let val2 = Number(prompt("Second value"));

switch (operation) {
  case "+":
    document.writeln(val1 + val2);
    break;

  case "-":
    document.writeln(val1 - val2);
    break;

  case "*":
    document.writeln(val1 * val2);
    break;

  case "/":
    document.writeln(val1 / val2);
    break;

  case "%":
    document.writeln(val1 % val2);
    break;

  default:
    document.writeln("Invalid operation");
}
