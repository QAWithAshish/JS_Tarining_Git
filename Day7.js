// ES6 modules: import and export
// Creating and using modules
// CommonJS modules (Node.js)

// ES6 modules: import and export --> An external file that contains reusable code
//                                   that can be imported into other JavaScript files.
//                                   Write resusable code for many different apps.
//                                   Can contain variables, classes, functions ... and more
//                                   Introduced as part of ECMAScript 2015 update

//
//Import using require
//const {PI}  = require("./MathUtils.js");

//Import using package.json file
import {
  PI,
  getAreaOfCircle,
  getAreaOfSqaure,
  getCincunference,
} from "./MathUtils.js";

console.log(PI);
let output = getCincunference(4);
console.log(output);
let areaOfCircle = getAreaOfCircle(4);
console.log(areaOfCircle);
const areaOfSquare = getAreaOfSqaure(4);
console.log(areaOfSquare);

// Creating and using modules --> JavaScript modules allow you to break up your code into separate files.
//                                This makes it easier to maintain a code-base.
//                                Modules are imported from external files with the import statement.

//Export --> Modules with functions or variables can be stored in any external file.
//           There are two types of exports:
//             - Named Exports
//             - Default Exports

// Please check person.js file

// Importing all data from person.js
import { name, age } from "./person.js";

console.log(`My name is ${name} and my age is ${age} years`);

// Importing all data from person.js
import message from "./message.js";

console.log(message());
