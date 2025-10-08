/*
 *DEFAULT PARAMETERS
 */

//Default parameters allows you to initialize the function parameters
//With a default value if an argument is either not provided
//or is explicitly passed as undefined when the function is called.

//Default parameters simplify the function signatures
//and eliminate the need for common boilerplate logic inside the
//function body to check if the argument is missed.

/**
 * OLD WAY (PRE-ES6)
 */

//Before default parameters ,
//Logical OR || operator is used to set defaults
//Which had a major pitfall

function greetOldWay(name, greet) {
  //If name is not provided the, or explicitly set to null/undefined, this works.
  //PITFALL : If name is an empty string or 0 this still uses the default value
  name = name || "sid";
  greet = greet || "Hello";

  return console.log(`${greet}, ${name}`);
}

greetOldWay("", ""); // Hello, sid
greetOldWay(0, 0); // Hello, sid

/**
 * ES6+
 */

//With default parameters, the assignment happens only
// if the argument is missing or exactly undefined.
// Values like null, 0, or '' are treated as valid inputs.

//You assign the default value directly in the parameter list using the equal sign (=).

function greetNewWay(name = "Sid", greet = "Hello") {
  return console.log(`${greet}, ${name}`);
}

greetNewWay("", ""); // ,
greetNewWay(0, 0); // 0, 0
