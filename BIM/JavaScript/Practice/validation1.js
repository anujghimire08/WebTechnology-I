const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.querySelector("#mail").value.trim();
  const number = Number(document.querySelector("#number").value.trim());
  const hobby = document.querySelector("select").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');
  const country = document.querySelector("#country").value.trim();
  if (
    !/^(?!.*\.\.)[a-zA-Z0-9+_.%-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/.test(
      email,
    )
  ) {
    alert("invalid email");
    return;
  }
  if (!/(\+977|977)?(98|97)\d{8}/.test(number)) {
    alert("invalid number format");
    return;
  }
  if (!hobby) {
    alert("enter hobby");
    return;
  }
  if (!gender) {
    alert("select gender");
    return;
  }
  if (country === "") {
    alert("fill country");
    return;
  }
  alert("form valid");
  form.reset();
});
