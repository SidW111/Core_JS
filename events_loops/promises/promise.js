//promise is an object in javascript
//that represents the eventual completion(resolves) or failure(rejects)
//of an async operation
//promise is also a microtask but the fetch is given a priority or a special callback

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("done");
  }, 100);
});

promise.then((data) => {
  console.log(data);
});

//async await is a syntactic sugar for the promises
//it helps to understand the async code synchronously

async function getAllUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
}

getAllUsers();

//fetch is a microtask and has a priority in callback
//it's executed or stacked first in the callback queue or call stack
//fetch will get resolved first
//fetch is bundled with the node js itself back in 2022 officially by the node js
//it has been built by the bluebird library

fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => {
    data.json().then((data) => {
      console.log(data);
    });
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("done");
  });
