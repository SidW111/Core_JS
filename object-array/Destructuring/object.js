//Object Destructuring

//A concise way to extract the values from object into variables

const user = {
  username: "siddhant",
  password: "siddhant2003",
  age: 22,
};

const { username, password, age } = user; // destructuring
console.log(username, password, age);

//We can also rename

const { username: siddhant } = user;

console.log(siddhant);
