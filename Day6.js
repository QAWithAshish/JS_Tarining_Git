// Classes and objects
// Constructor functions
// Inheritance
// Methods and properties

// Classes and objects

// Classes --> (ES6 feature) provides a more structured and cleaner way to
//              work with objects compared to traditional constructor functions
//              Always add a method named constructor():
//              ex. static keyword, encapsulation, inheritance

class Car {
  constructor(name, price, onRoadPrice) {
    this.name = name;
    this.price = price;
    this.onRoadPrice = onRoadPrice;
  }
  displayCars() {
    console.log(`Car Name : ${this.name}`);
    console.log(`Car Price : ${this.price}CR Rs`);
  }

  displayOnRoadPrice() {
    console.log(`On Road price : ${this.onRoadPrice}CR Rs`);
  }
}

const car1 = new Car("BMW", 19.99);
const onRoadPrice = new Car("BMW", 19.99, 24.5);

car1.displayCars();
onRoadPrice.displayOnRoadPrice();

// objects --> A collection of related properties and/or methods
//             Can represent real world objects (people, products, places)
//             object = {key:value,
//                    function()}

const person = {
  firstName: "Ashish",
  lastName: "Bhalray",
  age: 22,
  isEmployed: true,
  welocomeMsg: function () {
    console.log(`Hello ${this.firstName} Welcome!!!`);
  },
};

console.log(person.firstName + " " + person.lastName);
person.welocomeMsg();

// Constructor functions --> Special method for defining the
//                           properties and methods of objects

function Cars(cName, modelName, color, price, year) {
  this.cName = cName;
  this.modelName = modelName;
  this.color = color;
  this.price = price;
  this.year = year;
  this.drive = function () {
    console.log(`You are driving ${modelName}`);
  };
}

const car_Honda = new Cars("Honda", "Honda City", "White", 15.5, 2024);

const car_Ford = new Cars("Ford", "Eco Sport", "White", 13.5, 2018);

console.log(car_Honda);

console.log(car_Ford);
console.log(car_Ford.modelName);

car_Ford.drive(); //Calling function from Cars
car_Honda.drive();

// Inheritance --> allows a new class to inherit properties and methods
//                  from an existing class (parent -> child)
//                  helps with code reusability

class Animal {
  isAlive = true;

  eat() {
    console.log(`The ${this.name} is eating`);
  }
  sleep() {
    console.log(`The ${this.name} is sleeping`);
  }
}

class Dog extends Animal {
  name = "Dog";

  run(){
    console.log(`${this.name} can run fast`);
  }
}
class Hawk extends Animal {
  name = "Hawk";
  fly(){
    console.log(`${this.name} can fly high`);
  }
}
class Fish extends Animal{
    name="Fish";
    swim(){
        console.log(`${this.name} can live under water`);
      }

}

const dog = new Dog();
const hawk = new Hawk();
const fish = new Fish();

console.log(dog.isAlive);
dog.eat();
dog.sleep();

hawk.sleep();
hawk.eat();

dog.run();
fish.swim();
hawk.fly();




