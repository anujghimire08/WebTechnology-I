function validationHandler(e) {
  e.preventDefault();
  const username = document.querySelector("#user-name").value.trim();
  const mail = document.querySelector("#email").value.trim();
  const country = document.querySelector("#country").value;
  const gender = document.querySelector('input[name="gender"]:checked');

  if (!/^[A-Za-z\s]{8,}$/.test(username)) {
    alert("invalid username");
    return;
  }
  if (!/^[A-Za-z0-9.+%-]+@gmail\.com$/.test(mail)) {
    alert("invalid email");
    return;
  }
  if (country === "") {
    alert("select country");
    return;
  }
  if (!gender) {
    alert("tick gender");
    return;
  }
  alert("Form Validate Success");
  document.querySelector("form").reset();
}
