const userNumber = document.getElementById("phone-number");

userNumber.textContent = localStorage.getItem("number");

const generateOTP = () => {
  return Math.floor(1000 + Math.random() * 999);
};

console.log(generateOTP());

const popup = document.getElementById("popup");

const time = document.getElementById("timer");
time.textContent = "0:60";

let num = 60;
const interval = setInterval(() => {
  num--;
  setTimeout(() => {
    popup.style.display = "block";
  }, 3000);
  time.innerHTML = `0:${num}`;
  if (num < 10) {
    time.innerHTML = `0:0${num}`;
  }
  if (num === 0) {
    popup.style.display = "none";
    time.textContent = "0:00";
    clearInterval(interval);
  }
}, 1000);
