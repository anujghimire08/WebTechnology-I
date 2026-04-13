const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.querySelector("#user-name").value.trim();
  const address = document.querySelector("#address").value.trim();
  const mail = document.querySelector("#mail").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (!/^[A-Za-z0-9\s]{2,}$/.test(username)) {
    alert("Invalid UserName");
    return;
  }
  if (!/^[A-Za-z0-9\s]{2,}$/.test(address)) {
    alert("Invalid Address");
    return;
  }
  if (!/^[A-Za-z0-9.+-%]+@[a-zA-Z.-]\.[a-zA-Z]{2,}(\.[a-zA-Z])?$/.test(mail)) {
    alert("Invalid Email");
    return;
  }
  if (!/^(?=.*[A-Za-z0-9])(?=.*[\d])(?=.*[@!$#]).{6,}$/.test(password)) {
    alert("Invalid Password");
    return;
  }
  alert("Form Validate");
  form.reset();
});
