// function without parameter
function hellod(){
  console.log("Hello");
}
hellod();

// function with parameter
function hello(name){
  console.log(`Hello${name}`);
}
hello("anuj");

// unnamed function without parameter
const hello1 = ()=> console.log("hello");
hello1();

// unnamed function with parameter
const hello2 = (number)=>{
  console.log(number);
}
hello2(38744389);

// function return
const randomNumber = ()=> Math.random();
console.log(randomNumber());

  
// function with default value
function bye(name ="Anuj"){
  console.log(name + " Byee");
}
bye();