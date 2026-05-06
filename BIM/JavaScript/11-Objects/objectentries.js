const obj = {
  a: "hello",
  b: "this is",
  c: "javascript",
};
const entries = Object.entries(obj);
console.log(entries);
entries.forEach(([key, value]) => {
  console.log(value);
});
