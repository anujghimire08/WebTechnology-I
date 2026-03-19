let currentValue = "";
function appendValue(val) {
  currentValue += val;
  document.querySelector("#display").value = currentValue;
}
function calOperation() {
  try {
    currentValue = eval(currentValue);
    document.querySelector("#display").value = currentValue;
  } catch (error) {
    document.querySelector("#display").value = "error";
    currentValue = "";
  }
}
function clearDisplay() {
  currentValue = "";
  document.querySelector("#display").value = currentValue;
}
