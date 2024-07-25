// Callbacks
// Promises: creating, chaining, error handling
// Async/await

const { rejects } = require("assert");
const { resolve } = require("path");
const { setTimeout } = require("timers/promises");

// Callbacks --> a function that is passed as an argument to another function.
//               used to handle asynchronous -operations
//               1. Reading a file
//               2. Network requests
//               3. Interacting with databases

hello(sayGoodNight); // Calling the callback function and function name

//Here we have pas callback as parameter and callback function as function
function hello(callback) {
  console.log("Hello !");
  callback();
}
function goodbye() {
  console.log("Goodbye !");
}
function sayMorining() {
  console.log("Good Morning !");
}

function sayGoodNight() {
  console.log("Good Night !");
}

// Another example for callback function

sum(displaySum, 4, 6);

function sum(callback, a, b) {
  let sumof = a + b;
  callback(sumof);
}

function displaySum(sum) {
  console.log("Sum of the a and b : ", sum);
}

//**************************************************************************************************

// Promises: creating, chaining, error handling

// Promise --> An Object that manages asynchronous operations.
//            Wrap a Promise Object around {asynchronous code}
//            "I promise to return a value"
//            PENDING -> RESOLVED or REJECTED
//            new Promise (resolve, reject) => {asynchronous code}

// Creating promises -->
const promise = new Promise((resolve, reject) => {
  const isDone = true;

  if (isDone) {
    resolve("The task is done");
  } else {
    reject("Task is not yet done");
  }
});

promise.then((result) => {
  console.log(result);
});

//Chaining
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("First promise"), 1000);
});

promise1
  .then((task1) => {
    console.log(task1);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Secend promise"), 1000);
    });
  })
  .then((task2) => {
    console.log(task2);
    return "Third promise";
  })
  .then((task3) => {
    console.log(task3);
  });

//Error handling
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("First promise"), 1000);
});

promise2
  .then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
      setTimeout(() => reject("Second promise failed"), 1000);
    });
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("All operation done with one error");
  });

//**************************************************************************************************

// Async/await

// Async/await --> async and await make promises easier to write"
//async makes a function return a Promise
//await makes a function wait for a Promise

const getData = async () => {
  let data = "Hello Ashish";
  return data;
};

getData().then((data) => console.log("Get async data : ", data));

const getPersonData = async () => {
  let name = await "Ashish";
  let lastname = await "Bhalray";
  console.log("My name is : ", name, lastname);
};

console.log(100);
getPersonData();

// Async/Await example

function functionOperation() {
    let fristPromise = new Promise((resolve, reject) => resolve("Hello Frist Promise"));
  
    let secondPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Resolve 2nd promise");
      }, 1000);
    });
    let combinedPromise = Promise.all([fristPromise, secondPromise]);
    return combinedPromise;
  }
  
  async function display(){
      let data = await functionOperation();
      console.log(data);
  }
  
  display();

//   Advantages of Async and Await
// Improved Readability --> Async and Await allow asynchronous code to be written in a synchronous style, making it easier to read and understand.
// Error Handling -->  Using try/catch blocks with async/await makes error handling straightforward.
// Avoids Callback Hell --> Async and Await help in avoiding nested callbacks and complex promise chains.
// Better Debugging --> Debugging async/await code is more intuitive as it behaves like synchronous code.