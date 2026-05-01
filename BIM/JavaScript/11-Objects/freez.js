const obj = { name: "Anuj", age: 100 };
console.log(obj.name); //'Anuj'
obj.name = "Aayan";
console.log(obj.name); //'Aayan'
Object.freeze(obj);
obj.name = "ram";
console.log(obj.name); //'Aayan'