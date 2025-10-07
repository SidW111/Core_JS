
//A Map is a collection of key-value pairs
//where the keys can be of any data type, including objects or functions. 

//This is a significant difference from plain JavaScript objects, 
//where keys must be strings or symbols.

//Maps are iterable in insertion order, making it easy to loop through them.
//They are generally preferred over objects for collections
//of key-value pairs when the keys are not just strings.


//Keys can be any value: 
//You can use objects, functions, or any primitive as a key.
const myMap = new Map();

myMap.set(1,'siddhant')
myMap.set({},'ashok')
myMap.set('s','waingade')

console.log(myMap)