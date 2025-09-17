//ARRAY destructuring

//a concise way to extract the values into varibles in order;

const arr = [1, 2, 3, 4, 5];

const [first, second, third] = arr; //destructuring

console.log(first, second, third);

const [st, , , , fth] = arr; // can skip the value
console.log(st, fth);
