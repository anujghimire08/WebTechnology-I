const userNumber = document.getElementById("phone-number");

userNumber.textContent = `+977-${localStorage.getItem("number")}`;

const generateOTP = () => {
  return Math.floor(1000 + Math.random() * 9000);
};
let otp = generateOTP();

const popup = document.getElementById("popup");
popup.className = "hidden";
popup.textContent = otp;

const time = document.getElementById("timer");
time.textContent = "1:00";
let num = 60;

setTimeout(() => {
  popup.className = "display";
}, 3000);

const interval = setInterval(() => {
  num--;
  time.innerHTML = `0:${num}`;
  if (num < 10) {
    time.innerHTML = `0:0${num}`;
  }
  if (num === 0) {
    popup.className = "hidden";
    clearInterval(interval);
  }
}, 1000);

const inputs = document.querySelectorAll(`input[type="text"]`);

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let userInputOTP = "";
  inputs.forEach((el) => {
    userInputOTP += `${el.value}`;
  });
  verification(userInputOTP);
  form.reset();
});

const verification = (userInputOTP) => {
  if (otp == Number(userInputOTP)) {
    console.log("matched");
  } else {
    console.log("not matched");
  }
};
