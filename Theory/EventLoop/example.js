//Example 1
//setTimeOut vs normal code

console.log("start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

// console.log("end");

//Example 2
//Promises vs setTimeout

console.log("start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => console.log("promise resolved"));

console.log("end");
