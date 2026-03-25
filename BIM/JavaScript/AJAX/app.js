const btn = document.querySelector("button");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const xhttp = new XMLHttpRequest();
  console.log(xhttp);

  xhttp.open("GET", "info.json", true);
  xhttp.onload = function () {
    if (this.status === 200) {
      const users = JSON.parse(this.responseText);
      console.log("Server says:", this.responseText);
      const ol = document.createElement("ol");
      const storage = document.createDocumentFragment();
      users.forEach((el) => {
        console.log(el);
        const li = document.createElement("li");
        li.textContent = `${el.name}:${el.email}`;
        storage.appendChild(li);
      });
      document.getElementById("ol").appendChild(storage);
    } else {
      console.error("Error: Status", this.status);
    }
  };
  xhttp.send();
});
