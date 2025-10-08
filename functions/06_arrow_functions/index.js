/**
 * ARROW FUNCTIONS
 */

//Arrow functions are a concise syntax introduced in ECMAScript 2015(ES6)
//for writing anonymous function expressions in JS.
//They Offer a shorter way to define functions and handle this keyword
//differently compared to traditional function expressions


//Arrow function with single expression doesnt require anything it returns implicitly
const addd = (a, b) => a + b;

//Arrow function with a block body requires a explicit return
const add = (a, b) => {
  return a + b;
};

console.log(addd(3, 4));
console.log(adddd(2, 3));
console.log(add(1, 2));

// Key Characteristics and Differences from Traditional Functions:

// Concise Syntax: Arrow functions provide a shorter syntax,
// especially for single-expression functions,
// where the return keyword and curly braces can be omitted for an implicit return.

// Lexical this Binding:
// This is a crucial distinction. Arrow functions do not have their own this binding.
// Instead, they inherit this from the enclosing lexical scope (the scope where they are defined).
// This eliminates the need for bind(), call(), or apply() to manage this in many common scenarios,
// particularly with callbacks and event handlers.

// No arguments Object:
// Arrow functions do not have their own arguments object.
// If you need to access arguments, you can use rest parameters (...args).

// Not Suitable as Constructors:
// Arrow functions cannot be used as constructors with the new keyword.

// No prototype Property: Arrow functions do not have a prototype property.

// Cannot Use yield: You cannot use yield within an arrow function's body,
// meaning they are not suitable for generator functions.
