//shallow copy creates a new array or object, but it only duplicates
//the top level properties
//If any of these properties are references to the other obejcts 
//or arrays(.i.e nested structure), the copy will still point to the same
//underlying referenced object as the original

//this means that the changes made to the nested object
//within the copied structure will also affect the original object


//this is getting the reference directly 
//becuase the array is directly assigned to copyArr
const arr = [1, 2, 3, 4];
const copyArr = arr // directly assigned shallow copy
const copyArray = [...arr] //spread operator shallow copy
const copyArrayM = Array.from(arr) // using Array.from method


copyArr[1] = 12;
console.log(copyArr)
console.log(arr)

// const arr2 = arr;
// console.log(arr);
// console.log(arr2);




//COMMON METHODS FOR SHALLOW COPYING

// spread operators (...) for objects and array
// Object.assign({},obj) for objects
// Arrray.from(original Array) for Array
// Array.prototype.concat() for Array

const obj = { 1: "sid", 2: "savior" };
const copyOb = obj; //directly assigned shallow copy
const copyObj = {...obj} //spread operator shallow copy
const copyObject = Object.assign({},obj) // Object method shallow copy


copyObj[1] = "siddhant"
console.log(copyObj);
// console.log(obj)
// const obj2 = obj;
// console.log(obj2)

