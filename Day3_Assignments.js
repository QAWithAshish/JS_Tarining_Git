// Write a function that takes two numbers as parameters and returns their sum.
// Create an arrow function that multiplies two numbers.
// Write a higher-order function that takes a function and a number, and calls the function with that number.
// Create a function that prints "Hello, [name]!" where [name] is passed as a parameter.

// Write a function that takes two numbers as parameters and returns their sum.
function sum(a, b) {
  return a + b;
}
let sumOutput = sum(10, 20);
console.log(sumOutput);

// Create an arrow function that multiplies two numbers.
const multiplies = (a, b) => a * b;
console.log(multiplies(5, 5));

// Write a higher-order function that takes a function and a number, and calls the function with that number.
function highOrderFunction(func, num) {
  return func(num);
}

const square = (a) => a * a;

console.log(highOrderFunction(square,))
