// console.time() can be used to measure how long a task in your code takes to run.

console.time("loop time");
let arr = [1, 2, 3, 4, 5];
for (let val of arr) console.log(val + " ");
console.timeEnd("loop time");