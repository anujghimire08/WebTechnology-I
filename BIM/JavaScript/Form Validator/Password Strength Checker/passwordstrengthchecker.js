function check() {
  const password = document.getElementById("password").value;
  const result = document.getElementById("result");
  if (password.length < 6) {
    result.textContent = "Weak Password ❌";
    result.style.color = "red";
  } else if (
    password.match(/[0-9]/) &&
    password.match(/[a-zA-z]/) &&
    password.match(/[@.$*!-]/)
  ) {
    result.textContent = "Strong Password ✅";
    result.style.color = "green";
  } else if (password.match(/[0-9]/) && password.match(/[a-zA-Z]/)) {
    result.textContent = "Medium Password ⚠️";
    result.style.color = "blue";
  }
}
