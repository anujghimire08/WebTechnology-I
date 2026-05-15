let arr = [1, 3, 2, 6, 7, 4, 0, 8, 2];
function findLargest(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) if (arr[i] > max) max = arr[i];
  return max;
}
console.log(findLargest(arr)); //8
document.writeln(findLargest(arr)); //8
