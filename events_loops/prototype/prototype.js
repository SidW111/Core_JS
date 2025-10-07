// This refers to a fundamental feature of the JavaScript language related to
// object-oriented programming and inheritance.
// Every JavaScript object has an associated "prototype" object.
// This prototype object contains properties and methods that are
// shared among all instances of a particular type of object.
// When a property or method is accessed on an object,
// JavaScript first checks if it exists directly on the object itself.
// If not found, it then looks up the "prototype chain" to see if the
// property/method exists on the object's prototype, or its prototype's prototype, and so on.
// This mechanism enables inheritance and allows for efficient code reuse by defining shared
// functionalities once on the prototype rather than replicating them for each object instance.
// The prototype property of a constructor function is used to add properties and methods
// that will be inherited by objects created with that constructor.

//define a constructor function
function Person(name, age) {
  (this.name = name), (this.age = age);
}

//adding a method to the persons prototype
Person.prototype.greet = function () {
  console.log(`my name is ${this.name} and age is ${this.age}`);
};

//create instance of the person
const person1 = new Person("sid", 22);

//inherited method called
person1.greet();

//verify the prototype linkage
console.log(Object.getPrototypeOf(person1) === Person.prototype);


function Animal(type){
  this.type = type;
}

Animal.prototype.AnimalType = function(){
 return `The type of Animal is ${this.type}`
}
const dog = new Animal('dog')
console.log(dog.AnimalType())

console.log(Animal.prototype.hasOwnProperty('AnimalType'))