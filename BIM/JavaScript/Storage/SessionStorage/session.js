const name = prompt("Your Name?");
const age = Number(prompt("Your Age?"));
let obj = {
  name: name,
  age: age,
};
sessionStorage.setItem("author", JSON.stringify(obj));
console.log(JSON.parse(sessionStorage.getItem("author")));
sessionStorage.removeItem("author");
