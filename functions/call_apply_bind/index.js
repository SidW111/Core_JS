function Greet(person, punctuation) {
  console.log(`I'm ${this.namee}${person}${punctuation}`);
}

const person = { namee: "Sid" };


//Invokes the function immediately 
//takes arguments individually
Greet.call(person, " Hello! ", "I'm from call");

//Invokes the function immediately
//takes arguments in an array
Greet.apply(person, [" Hello! ", "I'm from apply"]);

//does not invokes the function insteas returns a function
//with bounded to the current context provided
//usefull for callbacks
const sid = Greet.bind(person, " Hello! ", "I'm from bind");
sid();
