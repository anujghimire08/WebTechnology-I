/*isNaN is a built-in JavaScript function used to determine whether a value is Not-a-Number (NaN) or cannot be converted into a valid number. It first tries to convert the given value into a number, and if the result is NaN, it returns true; otherwise, it returns false.*/

let a = "10";
let b = "sds";
console.log(isNaN(a)); // false
console.log(isNaN(b)); // true
