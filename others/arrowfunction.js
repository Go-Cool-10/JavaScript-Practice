const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const mul = (x, y) => x * y;
const div = (x, y) => x / y;

console.log(add(1, 2));
console.log(sub(4, 3));
console.log(mul(2, 2));
console.log(div(4, 2));

// to print number array
let numbers = [10, 11, 20, 21, 30, 31, 40, 41, 50, 51];
numbers.forEach((n, i) => console.log(n + " " + i));

// to print odd numbers and vice versa
const oddNumbers = numbers.filter((n) => n % 2 != 0);
console.log(oddNumbers);

// to print string array
let names = ["shyam", "gogul", "karthick", "roshan", "sunil"];
names.forEach((name) => console.log(name));

// to print string starting with specific alphabets
const filterNames = names.filter((name) => name.slice(0, 1) == "s"); // startsWith or charAt(0)
console.log(filterNames);

// to search for a particular element in an array
console.log(names.includes("krrish"));
const nameContainsA = names.filter((name) => name.includes("a"));
console.log(nameContainsA);

// MAP
const square = numbers.map((n) => n * n);
console.log(square);

const capitalise = names.map((name) => name.toUpperCase());
console.log(capitalise);

// reduce & reduceRight method
const sumAll = numbers.reduce((sum, n) => sum + n, 0);
console.log(sumAll);

const productAll = numbers.reduce((product, n) => product * n, 1);
console.log(productAll);

const diffAll = numbers.reduceRight((diff, n) => diff - n);
console.log(diffAll); // reduceRight calculates from right of the array, declaration is not required

const divAll = numbers.reduceRight((div, n) => div / n);
console.log(divAll);

// shift and unshift
console.log(numbers);

numbers.shift(); // deletes front element of the array
console.log(numbers);

numbers.unshift(0); // adds(element) in front of the array
console.log(numbers);

// splice (startIndex, deleteCount, ....elements)
let values = [10, 20, 30, 40, 50, 60];
console.log(values);
values.splice(1, 4, 21, 31, 41, 51);
console.log(values);
