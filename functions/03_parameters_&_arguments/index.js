/*
 * PARAMETERS (DEFINING THE FUNCTION)
 */

//Parameters are the named variables listed in the function defn
//(When the function is created.)
//They are essentially placeholders for the values that will be passed
//into the function when it is called.

//Where they live: Inside ()parantheses of function declaration/defintion.

//what are they: Local variables which lives within the body.

//(a,b) are the parameters
function add(a, b) {
  return a + b;
}

/**
 * ARGUMENTS (CALLING THE FUNCTION)
 */

//Arguments are the actual values or expressions that are passed
//to the function when it is executed (or invoked).
//The arguments fill the roles defined by the parameters

//Where they live: Inside the parantheses() when the function is called.

//What are they : The real data values on which the function operates on.

//(1,2) are the arguments
let result = add(1, 2);
