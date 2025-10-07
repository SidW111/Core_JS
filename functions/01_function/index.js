/*
What is function ?
*/

//A function is a block of organized, reusable code
//to perform a specific task.

//Functions are fundamental building blocks of any programming langauage

//key purpose

/* 
1 Code Reusability
*/

//instead of writing the same code multiple times
//we can encapsulate it within a function and call that
//function whenever the task needs to be performed.
//this reduces the redundancy and makes the code more efficient.

/* 
2 Modularity and Organization
*/

//functions help break down complex programs into smaller,
//manageable units, improving code readability, maintainability,
//and debugging.
//Each function can focus on a single, well-defined responsibility.

/* 
3 Input Output
*/

//Functions can accept input values
//such as(arguments or parameters) and can return output value.
//This allows functions to be flexible and perform
//operations based on the varying data.

/* 
4 Encapsulation of Logic
*/

//Functions provide a way to group related statements and execute
//them as a single unit when called.
//The code inside a function only runs when the function is invoked.

/* 
Several ways to define the functions in JS
*/

//function declaration

function greet(name) {
  console.log(`HI ${name}`);
}

//function expression

const greet1 = function (name) {
  console.log(`HI ${name}`);
};

//Arrow function (ES6+)

const greet2 = (name) => {
  console.log(`Hi ${name}`);
};

//Here comes the question

//// Whats the diff between all these diff type of funtions ?////

/* 
Calling/Invoking Functions
*/

//Once defined, a function can be executed by calling it
//using its name followed by parantheses (),
//potentially including arguments if the function expects them;

greet('sid')
greet1('sid')
greet1('sid')