function Counter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => (count = 0),
    displayCount: () => console.log(`count value is ${count}`),
  };
}
let counter1 = Counter();
console.log(counter1.increment());
console.log(counter1.increment());
console.log(counter1.increment());
console.log(counter1.increment());
console.log(counter1.increment());
console.log(counter1.increment());

console.log(counter1.decrement());
console.log(counter1.decrement());
console.log(counter1.decrement());
console.log(counter1.decrement());

console.log(counter1.reset());
