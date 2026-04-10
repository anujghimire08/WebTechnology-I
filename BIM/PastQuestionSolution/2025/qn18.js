let target = Number(prompt("Enter Number To Search"));
let arr = [10, 20, 30, 50, 50];
const search = (arr, target) => {
  let isFound = false;
  let index;
  arr.forEach((el, idx) => {
    if (el === target) {
      isFound = true;
      index = idx;
    }
  });
  isFound
    ? console.log(`${target} Found at index ${index}`)
    : console.log(`${target} Not Found`);
};
search(arr, target);
