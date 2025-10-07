//the higher order function is a function
//which takes either a function as an argument
//or returns a new function

//inshort a function that works with another fucntion

//eg map reduce filter sort forEach addEventListener


function greet(value) {
  return `I'm ${value}`;
}

function HigherOrderFn(fn, value) {
  return fn(value);
}
console.log(HigherOrderFn(greet, "sid"));
