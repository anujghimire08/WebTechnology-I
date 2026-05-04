const user = {
  name: "xyz",
  age: 69,
};

Object.seal(user);

user.name = "Ram"; // allowed

user.city = "Kathmandu"; // won't be added
delete user.age; // won't be deleted

console.log(user);
