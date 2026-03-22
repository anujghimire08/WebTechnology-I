const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  const userInput = document.getElementById("user-number");
  e.preventDefault();
  localStorage.setItem("number", userInput.value);
  userInput.value = "";
  window.location.href = "otp.html";
});
