function factor(a) {
  return function (b) {
    return a * b;
  };
}
let fun = factor(3);
for (let i = 1; i < 11; i++) {
  console.log(fun(i));
}
