// Arrays: declaration, indexing, methods (push, pop, shift, unshift, slice, splice, map, filter, reduce)
// Objects: properties, methods, accessing and modifying properties
// Looping through arrays and objects

const { element } = require("wd/lib/commands");

// Arrays: declaration, indexing, methods (push, pop, shift, unshift, slice, splice, map, filter, reduce)

// Declaration : There are two ways to declear the array ( Array Literal and Array Constructor)

//Array Literal || Syntax let nameOfArr = [v1, v1, ...];
let arr = [2, 4, 63, 8, 2, 24];
console.log(arr); // [ 2, 4, 63, 8, 2, 24 ]

let listArr = ["Apple", "Mango", "Banana", "Orange", "Tamato"];
console.log(listArr); //[ 'Apple', 'Mango', 'Banana', 'Orange', 'Tamato' ]

//Array Constructor || Syntax let arrayName = new Array();
let arr1 = new Array();
console.log(arr1); // [] empty array

let arr2 = new Array("Java", "Python", "JS", "Rubey", "C#");
console.log(arr2); //[ 'Java', 'Python', 'JS', 'Rubey', 'C#' ]

// Indexing : In array indexing start from index 0
let arr3 = new Array("Java", "Python", "JS", "Rubey", "C#");
console.log(arr3[0]); //Java
console.log(arr3[1]); //Python
console.log(arr3[2]); //JS
console.log(arr3[3]); //Rubey
console.log(arr3[4]); //C#
console.log(arr3[5]); //Undefined
let lengthArr = arr3.length;
console.log(lengthArr);

//Methods (push, pop, shift, unshift, slice, splice, map, filter, reduce)

//Push --> For adding element in array || It will add element at the end of Array
let city = ["Indore", "Dewas", "Khandwa", "Ratlam"];
city.push("Dhar");
console.log(city);

//Unshift --> It will add in the starting of array
city.unshift("Bhopal");
console.log(city);

//Pop --> It will remove last element from the array
console.log(city); // [ 'Bhopal', 'Indore', 'Dewas', 'Khandwa', 'Ratlam', 'Dhar' ]
let lastCity = city.pop();
console.log("After removing last city ", city); // After removing last city  [ 'Bhopal', 'Indore', 'Dewas', 'Khandwa', 'Ratlam' ]

//Shift --> It will remove frist element from array
let fristCity = city.shift();
console.log("After removing first element ", city); //[ 'Indore', 'Dewas', 'Khandwa', 'Ratlam' ]

//Splice --> It will take two things one index and number of element to remove  Removes||
// 2 elements starting from index 1 and we can add elements as well
city.splice(1, 2, "Hello", "Hi");
console.log("After Removing 2 elements starting from index 1 : ", city);

//Slice --> method slices out a piece of an array
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const removeFruits = fruits.slice(1, 3); //Frist index value will be inclusive and last will be exclusive
console.log(removeFruits);

//Map --> creates a new array from calling a function for every array element.
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction);

function myFunction(num) {
  return num * 10;
}
console.log(newArr);

//Filter --> filters an array with values that passes a test Creates a new array
const number = [12, 34, 5, 7, 123, 54];
const evenNumber = number.filter(checkEven);
console.log(evenNumber);

const newNumber = number.filter((a) => {
  return a < 10;
});
console.log(newNumber);

function checkEven(number) {
  return number % 2 == 0;
}

//Reduce --> It will reduce an array into a single value by adding the resultant
let arr4 = [1, 2, 3, 4, 5];
let newArr4 = arr4.reduce((h1, h2) => {
  return h1 + h2;
});
console.log(newArr4);

//*********************************************************************************

// Objects: properties, methods, accessing and modifying properties

//Objects: Objects is nothing but real world entity like houses, cars, people, animals

const car = { type: "Honda", model: "Honda City", color: "White" };

const person = {
  firstName: "Ashish",
  lastName: "Bhalray",
  age: 20,
  eyeColor: "brown",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName());

const person2 = {};

//Adding properties into person2
person2.firstName = "Sunil";
person2.lastName = "Gupta";
person2.age = 23;
person2.eyeColor = "black";

//How to access the properties
console.log(person2.eyeColor);

//Object Properties --> Properties is most important part of js objects it can be changed ,added ,deleted ,Some are read only.
let ageOfPerson = person.age;
console.log(ageOfPerson);

let lastNameOfPerson = person["lastName"];
console.log(lastNameOfPerson);

//Adding New Properties
person.bloodGroup= "O+";
console.log(person);

//Removing the or deleting the properties
delete person.eyeColor;
console.log(person);


//Methods --> This method are the actions that can be performed on an object
const cars = {
    carName: "Honda City",
    company: "Honda",
    topSpeed: 200,
    color: "white",
    fullDetails: function () {
      return "Company name is "+this.company + " And car Name is : " + this.carName;
    },
  };
  
  let carDeatils =cars.fullDetails();
  console.log(carDeatils);

//*********************************************************************************

// Looping through arrays and objects

//Basic For loop
const carNames = ["Punch","Nexon","i20","Alto"];

for(let i=0 ; i<carNames.length;i++){
 console.log(carNames[i]);
}

//For of
for(const element of carNames){
    console.log(element);
}

//For each
carNames.forEach((element)=> {
    console.log(element);
})
  