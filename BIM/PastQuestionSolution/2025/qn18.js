let target = Number(prompt("Enter Number To Search"));
let arr = [10, 20, 30, 50, 50];
const search = (arr, target) => {
  let isFound = false;
  arr.forEach((el) => {
    if (el === target) {
      isFound = true;
    }
  });
  isFound
    ? console.log(`${target} Value is in array`)
    : console.log(`${target} value not found in array`);
};
search(arr, target);
