const p = document.querySelector("#result");

let a = Number(prompt("Enter First Number"));
let b = Number(prompt("Enter Second Number"));

if(isNaN(a) && isNaN(b)) {
  p.textContent="invalid inputs";
}
(a%2==0 && b%2==0)? p.textContent= a+b : p.textContent=a-b;