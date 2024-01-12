const print = (obj) => console.log(obj);

let product = { title: "laptop", price: 40000 };
let user = { name: "gogul", email: "gogul@gmail.com", password: "9187498" };
let employee = { name: "krrish", salary: 10000, department: "ECE" };

// print(product);
// print(user);
// print(employee);

// console.log(Object.keys(product));
// console.log(Object.values(product));

// console.log(Object.keys(employee));
// console.log(Object.values(employee));

// console.log(Object.keys(user));
// console.log(Object.values(user));

// Object.entries(product).forEach(([key,value]) => {
//     console.log(`${key} - ${value}`)
// })

// Object.entries(user).forEach(([key,value]) => {
//     console.log(`${key} - ${value}`)
// })

// Object.entries(employee).forEach(([key,value]) => {
//     console.log(`${key} - ${value}`)
// })

// delete employee.salary;
// console.log(employee);

// Object.freeze(employee);
// console.log(employee);

Object.seal(employee);
console.log(employee);

delete employee.salary;
console.log(employee);

employee.salary = "20000";
console.log(employee);

user.gender = "male";
console.log(user);
