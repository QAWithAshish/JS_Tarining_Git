// Write a program that uses if-else statements to check if a number is positive, negative, or zero.
let number = -18;

if (number > 0) {
  console.log("Number is positive ");
} else if (number < 0) {
  console.log("Number is negative ");
} else {
  console.log("Number is Zero ");
}

let value = false;
if (value == true) {
  console.log("Value is true");
} else {
  console.log("Value is false");
}

// Create a script that uses a switch statement to print the day of the week based on a number 1-7.
let dayNumber = 7;

switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
}

// Write a loop that prints numbers from 1 to 10 using a for loop.
//For Loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("***********************************");

//While Loop
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

console.log("***********************************");

//Do While Loop
{
  let i = 1;

  do {
    console.log(i);
    i++;
  } while (i <= 5);
}

//Block 
if (true) {
  let string = "Hello boss ";
  console.log(string);
}
// console.log(string);

//Function
function testFuntion() {
    var funVariable = "I am at test function";
    console.log(funVariable);
}
testFuntion();
//console.log(funVariable);