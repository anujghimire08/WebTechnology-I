let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.forEach((val) => console.log(val));

for (let index in arr) {
  console.log(index);
}

for (let val of arr) {
  console.log(val);
}

arr.map((val) => console.log(val));
