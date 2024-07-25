// Write a function that uses a callback to print a message after 2 seconds.
// Create a promise that resolves after 3 seconds and prints a message.
// Write an async function that fetches data from a public API (e.g., JSONPlaceholder) and logs the data.
// Handle errors in the async function using try/catch.

const { rejects } = require("assert");
const { resolve } = require("path");

// Write a function that uses a callback to print a message after 2 seconds.
function getData(callback){
    console.log("Hello ashish");
    callback();
}

function getAge(){
    setTimeout(()=>{
        console.log("The age of ashish is 24");
    },2000);
 
}

getData(getAge);

// Create a promise that resolves after 3 seconds and prints a message.
const promise = new Promise((resolve,reject)=>{

    setTimeout(()=> {
        resolve("Frist promise resolvoed");
    },3000);
});

promise.then((data)=> console.log(data));


// Handle errors in the async function using try/catch.
