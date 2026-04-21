const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  const userInput = document.getElementById("user-number");
  e.preventDefault();
  const numberRex = /^(96|97|98)\d{8}$/;
  if (numberRex.test(userInput.value)) {
    localStorage.setItem("number", userInput.value);
    window.location.href = "otp.html";
    userInput.value = "";
  } else {
    alert("invalid Nepal number format");
  }
});
