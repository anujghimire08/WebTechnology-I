var a = "hello";
function print() {
  var a = "world";
  function bar() {
    console.log(a); // world
  }
}
