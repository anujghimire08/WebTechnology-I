const name = prompt("Your Name?");
const age = Number(prompt("Your Age?"));
let obj = {
  name: name,
  age: age,
};
localStorage.setItem("author", JSON.stringify(obj));
console.log(JSON.parse(localStorage.getItem("author")));
localStorage.removeItem("author");
