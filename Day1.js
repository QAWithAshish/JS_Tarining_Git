// Overview of JavaScript and its use cases
// Setting up the development environment (VSCode, Node.js)
// Basic syntax: variables (var, let, const), data types (string, number, boolean, null, undefined, object), operators (arithmetic, comparison, logical)

var number = 100;

let userName = "Ashish";

const lastName = "Bhalray";

//Hello, World print
let grettings = "Hello, World!";

console.log(grettings);

//Basic operation with difrrent dataTypes
let name = "Ashish";

let age = 25;

let hight = 5.4;

let value = true;

let values = null;

let valueUndefine = undefined;

let person = { name: "Ashish", age: 30 };

console.log(name, age, hight, value);
console.log(person);

//Operators
(a = 10), (b = 20);
let sum = 10 + 20;
let sub = b - a;
let mult = (a * b) / 10;
let div = b / a;

console.log("Sum of 10 and 20 is : ", sum);
console.log("Substraction : ", sub);
console.log("Multipliation : ", mult);
console.log("Division : ", div);

//Comparison Operators:
let isEqual = 10 == "10"; // ==  for comapraing same values || true
let isStrictEqual = 10 === "10"; // === it will check the values and datatypes as well || false
let isNotEqual = 10 != 5; // true
let isGreaterThan = 10 > 5; // true

//Logical Operators
let andOperator = true && false; // false || When both will values true its given true or else gives false
let orOperator = true || false; // true || If any one value is true it will give true
let notOperator = !true; // false || Just change the oposite for given value

//Concate two string
let str1 = "Hello";
let str2 = "Ashish";

console.log(str1 + str2);
