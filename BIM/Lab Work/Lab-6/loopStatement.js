let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  document.writeln(arr[i]);
}

arr.forEach((val) => console.log(val));

for (let index in arr) {
  console.log(index);
}

for (let val of arr) {
  console.log(val);
}

arr.map((val) => console.log(val));

// use case of while loop
let count = 10;

while (count != 0) {
  console.log(count);
  count--;
}
