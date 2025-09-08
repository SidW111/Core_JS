function Greet(person, punctuation) {
  console.log(`I'm ${this.namee}${person}${punctuation}`);
}

const person = { namee: "Sid" };

Greet.call(person, " Hello! ", "I'm from call");

Greet.apply(person, [" Hello! ", "I'm from apply"]);

const sid = Greet.bind(person, " Hello! ", "I'm from bind");
sid();
