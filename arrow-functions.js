/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

function addTwoNumbers(a, b) {
    // Code block
    return a + b;
}
let sum = addTwoNumbers(1, 2);
console.log(sum);

// Arrow Function With Parameters

const addTwoNumbers2 = (a, b) => {
  // Code block
  return a + b;
}
let sum2 = addTwoNumbers(3, 4);
console.log(sum2);

// Single Line Arrow Function With Parameters

const addTwoNumbers3 = (a, b) => a + b;
let sum3 = addTwoNumbers(5, 6);
console.log(sum3);

// Implicit Returns

const saySomething = message => console.log(message);
saySomething('Hello there!!');

const sayHello = () => console.log("hello");
sayHello()

// Returning Multiple Lines

const returnMultiLineString = () => (
  `<p>
    This is a multiline string!
  </p>`
)
console.log(returnMultiLineString());