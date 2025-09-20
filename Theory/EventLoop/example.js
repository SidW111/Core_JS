//Example 1
//setTimeOut vs normal code

console.log("start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

console.log("end");

//Output

//start
//end
//Timeout Callback

//Example 2
//Promises vs setTimeout

console.log("start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => console.log("promise resolved"));

console.log("end");

//Output

//start
//end
//promise resolved
//Timeout Callback
