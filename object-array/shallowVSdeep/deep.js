//DEEP COPY
//a deep copy in contrast creates a completely independent
//duplicate of the original object or array, including all
//nested objects and arrays.

//It allocates new memory for every part of the structure
//ensuring that changes made to the copied will not
//affect the og and vice versa

const obj = { 1: "sid", 2: "savior" };

const deepcopyModern = structuredClone(obj);  //modern way for deep copy
const deepcopyTraditional = JSON.parse(JSON.stringify(obj));  //A common method for deep copy

//this change will only reflect in the og object
obj[1] = 'Siddhant'
console.log(obj)

//both the deep copies will not show all this updates of the og array
console.log(deepcopyModern);
console.log(deepcopyTraditional)


// const arr = [1,2,3,4,5]
// const copyArr = structuredClone(arr) // modern way for deep copy
// const copyArray = JSON.parse(JSON.stringify(arr)) //A common method for deep copy

// arr[2] = 22
// copyArr[3] = 33
// console.log(arr)
// console.log(copyArr)
// console.log(copyArray)
