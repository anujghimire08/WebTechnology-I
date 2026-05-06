const obj = {
  a: "hello",
  b: "this is",
  c: "javascript!",
  name: function () {
    console.log("hello anuj");
  },
};
const keys = Object.keys(obj);
console.log(keys); // [ 'a', 'b', 'c', 'name' ]
keys.forEach((k) => console.log(obj[k]));
