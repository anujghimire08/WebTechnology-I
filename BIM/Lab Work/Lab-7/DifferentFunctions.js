// function without parameter
function hello(){
  alert("Hello");
}
hello();

// function with parameter
function hello(name){
  alert(`Hello${name}`);
}
hello("anuj");

// unnamed function without parameter
const hello1 = ()=> alert("hello");
hello1();

// unnamed function with parameter
const hello2 = (number)=>{
  alert(number);
}
hello2(38744389);

// function return
const randomNumber = ()=> Math.random();
  
// function with default value
function bye(name ="Anuj"){
  console.log(name);
}