const formEL = document.getElementById("loginForm");
const emailEL = document.getElementById("email");
const passwordEL = document.getElementById("password");

formEL.addEventListener("submit", (info) => {
  info.preventDefault();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  let emailCheck = emailRegex.test(emailEL.value);
  let passwordCheck = passwordRegex.test(passwordEL.value);
  let isValid = true;

  document.getElementById("mailError").textContent = "";
  document.getElementById("passError").textContent = "";

  if (!emailCheck) {
    document.getElementById("mailError").textContent = "Invalid Mail";
    document.getElementById("mailError").style.color = "red";
    isValid = false;
  }

  if (!passwordCheck) {
    document.getElementById("passError").textContent = "Invalid Password";
    document.getElementById("passError").style.color = "red";
    isValid = false;
  }

  if (isValid) {
    document.getElementById("result").textContent = "✅Validated";
    document.getElementById("result").style.display = "block";
    document.getElementById("result").style.textAlign = "center";
    document.getElementById("result").style.color = "green";
  }
});
