//WeakMap

//A WeakMap is a variation of a Map where the keys must be objects and are held "weakly."
// This means that if there are no other references to a key object,
//  it can be garbage collected

let obj = { sid: "s" };

let weakMap = new WeakMap();

weakMap.set(obj, "somedata");
obj = null;// The key-value pair will eventually be garbage collected
