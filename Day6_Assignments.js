// Create a class Person with properties name and age , and a method to print a greeting.
// Create a subclass Student that inherits from Person and adds a property grade.
// Write a script to create instances of Person and Student , and call their methods.
// Implement getter and setter methods for the name property.

const { get } = require("https");

// Create a class Person with properties name and age , and a method to print a greeting.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    console.log(
      `Hello ${this.name} your age is ${this.age} welcome to JS Training!!!!`
    );
  }
}

const person = new Person("Ashish", 24);

person.greeting();

// Create a subclass Student that inherits from Person and adds a property grade.

class Person1 {
  constructor(grade) {
    this.grade = grade;
  }
}

class Student extends Person1 {
  constructor(name, grade) {
    super(grade);
    this.name = name;
  }
  printGrade() {
    console.log(`${this.name} your grade is : ${this.grade}`);
  }
}
const ashish = new Student("Ashish", "A+");
const rahul = new Student("Rahul", "A++");
const rajat = new Student("Rajat", "D");

ashish.printGrade();
rahul.printGrade();
rajat.printGrade();


// Write a script to create instances of Person and Student , and call their methods.
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    welcome() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class StudentM extends Person2 {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    
    printGrade() {
        console.log(`${this.name} is in grade ${this.grade}.`);
    }
}

const person1 = new Person2('Ashish', 30);
const person2 = new Person2('Krish', 45);

const student1 = new StudentM('Raja', 20, 'A');
const student2 = new StudentM('Dev', 22, 'B');

person1.welcome(); 
person2.welcome(); 

student1.welcome();        
student1.printGrade();      
student2.welcome();       
student2.printGrade();     


// Implement getter and setter methods for the name property.
const person3 = {
    firstName: "Ashish",
    lastName: "Bhalray",
    age: 22,
    isEmployed: true,
    welocomeMsg: function () {
      console.log(`Hello ${this.firstName} Welcome!!!`);
    },
  };

  function getfirstName(person3) {
    return person3.firstName;
  }
  
  function setfirstName(person3, newName) {
    person3.firstName = newName;
  }
  setfirstName(person3,"Rajat")
  console.log(getfirstName(person3));
  console.log(person3);
