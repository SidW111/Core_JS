/*
function expression (Named Functions)
*/

//Defined using the function keyword
//followed by a name, parameters, and a function body.

//Hoisted, means they can be used before their declaration/defn of the code

//this binding
//Binds its own this, the value of this is determined
//dynamically based on how the function is called.

//arguments object
//has its own arguments object, containing all arguments
//passed to the function.

function declaration() {
  return "function declaration";
}

/* 
Function Expressions (Anonymous and Named)
*/

//Defined by assigning an anonymous function to a var or constant.

//Not hoisted: they can only be called/used after their definition.

//this binding
//binds its own this, just like a function declaration.

//arguments object
//has its own arguments object,containing all the arguments.

//can also be named function expressions for better debugging,
//though the name is only accessible within the function's scope

const expression = function (name) {
  // anonymous function
  return "function expressions";
};

const expressions = function expression() {
  //Named function
  return "named function expressions";
};

/* 
Arrow Function ES6
*/

//A concise syntax for writing function expressions.

//Not hoisted. They are function expressions and
//must be defined before use.

//this binding
//Do not have their own this binding:
//they inherit this from the enclosing lexical scope.
//Cannot be used as constructors.

//arguments Object
//Does not have its own arguments object.
//You must use the rest parameters syntax (...args) to capture arguments

const Arrow = () => {
  return "Arrow function";
};
