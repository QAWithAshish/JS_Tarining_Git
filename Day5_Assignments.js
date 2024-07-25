// Write a function that uses a callback to print a message after 2 seconds.
// Create a promise that resolves after 3 seconds and prints a message.
// Write an async function that fetches data from a public API (e.g., JSONPlaceholder) and logs the data.
// Handle errors in the async function using try/catch.

const { rejects } = require("assert");
const { Console, error } = require("console");

// Write a function that uses a callback to print a message after 2 seconds.
function getData(callback) {
  console.log("Hello ashish");
  callback();
}

function getAge() {
  setTimeout(() => {
    console.log("The age of ashish is 24");
  }, 2000);
}

getData(getAge);

// Create a promise that resolves after 3 seconds and prints a message.
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Frist promise resolvoed");
  }, 3000);
});

promise.then((data) => console.log(data));

console.log(
  "*********************************************************************"
);

// Handle errors in the async function using try/catch.
async function asyncFunction() {
  try {
    const result1 = await promise1;
    console.log(result1);

    const result2 = await promise2;
    console.log(result2);

    const result3 = "Thired Promise";
    console.log(result3);
  } catch (error) {
    console.error("An error occoured : ", error);
  } finally {
    console.log("All task done");
  }
}

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Frist promise");
  }, 1000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Second promise reject ");
  }, 1000);
});

asyncFunction();

// Write an async function that fetches data from a public API (e.g., JSONPlaceholder) and logs the data.
// To use fetch() method please install this { npm install node-fetch }

async function getDataFromAPI() {
  const url = "https://jsonplaceholder.typicode.com/users";

  try {
    //Imported fetch from node-fetch
    const fetch = (await import("node-fetch")).default;
    const response = await fetch(url);
    if (!response.ok) {
      //console.error("Response was not correct");
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    console.log(data);
  } catch {
    console.error("Data was not fetched ", error);
  }
}
getDataFromAPI();
