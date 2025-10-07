//debounce delays the execution of the function until a
//certain period of inactivity has passed.

//wait until user stops the doing something for X milliseconds,
//then run the function

//eg. Search Input box :- Wait until the user stops typing to make an API call.

const debounce = (fn, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer); //cancel the last call
    timer = setTimeout(() => {
      fn(...args); // if the specified delay happens then only call the function
    }, delay);
  };
};

const search = (query) => {
  console.log("Searching for " + query); // lets say the api call is this
};

const debouncedSearch = debounce(search, 1000);

debouncedSearch("H");
debouncedSearch("Ha");
debouncedSearch("Har");
debouncedSearch("Hard");
debouncedSearch("Hard ");
debouncedSearch("Hard J");
debouncedSearch("Hard JS");

const debouncee = (fn, delay) => {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const handleInput = debouncee((input) => {
  console.log("Searching for :", input.target.value);
}, 1000);

const input = document
  .getElementById("input")
  .addEventListener("input", handleInput);
