//SETs

//A Set is a collection of unique values.
//It's a bit like an array, but it automatically removes any duplicate values you try to add.
//This makes it ideal for scenarios where you need to store a list of distinct items,
//such as getting a unique list of user IDs from a log file.

// Like Maps, Sets are also iterable in insertion order.


// Key Features:

// Unique values only: Automatically handles duplicates.

// Insertion order: Iterates elements in the order they were inserted.

// Size property: Easily get the number of elements with .size.

const set = new Set([1,2,3,44,55,5,5,5,5,5])
console.log(set) //Output :- 1,2,3,44,55,6