// Create an array of numbers and write a function that returns the sum of all elements.
// Write a script that uses array methods to manipulate an array of strings.
// Create an object representing a person with properties like name, age, and hobbies. Write functions to access and modify these properties.
// Write a loop to iterate through an array and print each element.
// Write a loop to iterate through an object and print each property and its value.

// Create an array of numbers and write a function that returns the sum of all elements.
let array = [1, 2, 3, 4, 5];

let sumOfAllElements = array.reduce((h1, h2) => {
  return h1 + h2;
});
console.log(sumOfAllElements);

// Write a script that uses array methods to manipulate an array of strings.
const fruits = ["Apple", "Mango", "Banana", "Orange"];

//Adding new elemnt at the end of array
fruits.push("Grapes");
console.log(fruits);

//Remving 2 elemnets from index 1 and adding two new fruits
fruits.splice(1, 2, "Charry", "Watermelons");
console.log(fruits);

// Create an object representing a person with properties like name, age, and hobbies. Write functions to access and modify these properties.
const person = {
  name: "Ashish",
  age: 27,
  hobbies: ["Horse Riding","Travelinng"],
  bloodType: "O+",
  
};

function getName(person) {
  return person.name;
}

function setName(person, newName) {
  person.name = newName;
}
function addHobbies(person , newHobbie){
person.hobbies.push(newHobbie);
}
function removeHobbies(person ){
    person.hobbies.pop();
    }


setName(person, "Bhai Bhai");
console.log(getName(person));

addHobbies(person, "Bike Rinding");
console.log(person);

removeHobbies(person)
console.log(person);

setName(person ,"Ashish");
console.log(person);

// Write a loop to iterate through an array and print each element.
const courses = ["Java", "Python", "C#", "JS"];
courses.forEach((element)=> {
    console.log(element);
})

// Write a loop to iterate through an object and print each property and its value.
const person1 = {
    name: "Rajat",
    age: 27,
    hobbies: ["Horse Riding","Travelinng"],
    bloodType: "O+"
  };

  function printAllProperties(person) {
    for (let key in person) {
      if (person.hasOwnProperty(key)) {
        console.log(`${key}: ${person[key]}`);
      }
    }
  }

  printAllProperties(person);