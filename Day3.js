//Defining and invoking functions
function helloWOrld() {
  console.log("Hello! World");
}
helloWOrld();

//Function parameters and return values
function addtion(a, b) {
  return a + b;
}
let sum = addtion(30, 20);
console.log(sum);
//console.log(addtion(30, 20));

//Arrow functions
const multi = (a, b) => a * b;
console.log(multi(5, 100));

//With Multiple Statements:
const wish = (name) => {
  let message = `Hello,${name}!`;
  return message;
};
console.log(wish("Ashish"));

//Higher-Order Functions (Passing Functions as Arguments)
function higherOrderFunctionForSquare(func, num) {
  return func(num);
}
function higherOrderFunctionForRectangle(func, l, w) {
  return func(l, w);
}
function higherOrderFunctionForTriangle(func, b, h) {
  return func(b, h);
}
function higherOrderFunctionForCircle(func, r) {
  return func(r);
}
const square = (x) => x * x;
const rectangle = (l, w) => l * w;
const triangle = (b, h) => (1 / 2) * (b * h);
const circle = (r) => Math.PI * r * r;

console.log(higherOrderFunctionForSquare(square, 6)); // Output: 36
console.log(higherOrderFunctionForRectangle(rectangle, 10, 5)); // Output: 50
console.log(higherOrderFunctionForTriangle(triangle, 5, 10)); // Output: 25
console.log(higherOrderFunctionForTriangle(circle, 2)); // Output: 12.566370614359172
