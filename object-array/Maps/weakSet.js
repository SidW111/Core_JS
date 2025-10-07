//WeakSet

//A WeakSet is similar to a Set, but it only stores objects and holds them "weakly."
//Like a WeakMap, 
//the objects stored in a WeakSet do not prevent garbage collection


// Key Features:
// Stores objects only: Primitive values cannot be added.

// Weakly held objects: Objects do not prevent garbage collection.

// Not iterable: You cannot loop through the elements.

let a = {}
let b = {}
const weakset = new WeakSet();
weakset.add(a)
weakset.add(b)

console.log(weakset)
a = null;