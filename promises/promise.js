//promise is an object in javascript
//that represents the eventual completion(resolves) or failure(rejects)
//of an async operation
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("done");
  }, 100);
});

promise.then((data) => {
  console.log(data);
});
// async function getAllUsers() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();
//   console.log(data);
// }

// getAllUsers();

//fetch is a microtask and has a priority in callback
//it's executed or stacked first in the callback queue or call stack
//fetch will get resolved first

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => {
//     data.json().then((data) => {
//       console.log(data);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("done");
//   });
