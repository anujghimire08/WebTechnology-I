const userNumber = document.getElementById("phone-number");
userNumber.textContent = `+977-${localStorage.getItem("number") || "9800000000"}`;

const generateOTP = () => Math.floor(1000 + Math.random() * 9000);
let otp = generateOTP();

const popup = document.getElementById("popup");
popup.textContent = otp;
popup.classList.add("hide");

const time = document.getElementById("timer");
let num = 60;
time.textContent = "1:00";

setTimeout(() => {
  popup.classList.add("display");
}, 3000);

const interval = setInterval(() => {
  num--;
  time.textContent = `0:${num.toString().padStart(2, "0")}`;
  if (num === 0) {
    popup.classList.remove("display");
    clearInterval(interval);
  }
}, 1000);

const inputs = document.querySelectorAll("#input-container input");
inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (input.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });
});

const form = document.querySelector("form");
const result = document.getElementById("result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let userInputOTP = "";
  inputs.forEach((el) => (userInputOTP += el.value));
  verification(userInputOTP);
  form.reset();
  inputs[0].focus();
});

const verification = (userInputOTP) => {
  if (otp.toString() === userInputOTP) {
    result.textContent = "Matched";
    result.style.color = "green";
    clearInterval(interval);
    popup.classList.remove("display");
  } else {
    result.textContent = "Not Matched";
    result.style.color = "red";
    clearInterval(interval);
    popup.classList.remove("display");
  }

  setTimeout(() => {
    result.textContent = "";
  }, 2000);
};
