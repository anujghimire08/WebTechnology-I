const form = document.querySelector("form");
const result = document.querySelector("p");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const pass = document.querySelector("input").value.trim();
  if (!/^(?=.*[a-zA-Z0-9])+(?=.*[+_!@#.-]).{8,}$/.test(pass)) {
    result.textContent = "Weak Password";
    return;
  }
  result.textContent = "strong Password";
});
