const obj = { name: "hello", age: 34, location: "fhdfd" };
let cpy = JSON.parse(JSON.stringify(obj));
console.log(cpy);
cpy.name = "anuj";
console.log(cpy);
//deep clone
let obj2 = { name: "hello", age: 34, location: "fhdfd" };
let cpy2 = structuredClone(obj2);
console.log(cpy2);

// shallow clone - refrence
const obj3 = { name: "hello", age: 34, location: "fhdfd" };
let cpy3 = obj3;
console.log(cpy3);
cpy3.name = "anuj";
console.log(cpy3);
console.log(obj3);
