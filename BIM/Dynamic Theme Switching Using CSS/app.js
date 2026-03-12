const btns = document.querySelectorAll("[name=theme]");
// console.log(btns);

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    storeTheme(btn.id);
    // if has fail
    document.documentElement.className = btn.id;
  });
});

const storeTheme = (name) => {
  localStorage.setItem("theme", name);
};

function setTheme() {
  const savedTheme = localStorage.getItem("theme");
  btns.forEach((btn) => {
    if (btn.id === savedTheme) {
      btn.checked = true;
    }
    document.documentElement.className = savedTheme;
  });
}

document.addEventListener("DOMContentLoaded", setTheme);
