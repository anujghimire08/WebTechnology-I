const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{
e.preventDefault();
const userId = Number(document.getElementById("userid").value.trim());
const phone = document.getElementById("phone").value.trim();
const mail = document.getElementById("email").value.trim();
const password = document.getElementById("password").value.trim();
const cpassword = document.getElementById("confirm").value.trim();

// user id validation
if(userId <= 0){
    alert("User ID must be greater than 0");
    return;
}

// phone number validation
if(!/^\d{10}$/.test(phone)){
  alert("phone length must be 10");
  return;
}

// email validation
if(!/^[a-zA-Z0-9._%+-]+@gmail\.com(\.[a-z]{2,})?$/.test(mail)){
  alert("invalid email format");
  return;
}

// password validation
if(password.length < 6){
  alert("password length must be at least 6");
  return;
}

// confirm passsword validation
if(password!==cpassword){
  alert("password don't matched");
  return;
}

alert("form validated!");
form.reset();
})