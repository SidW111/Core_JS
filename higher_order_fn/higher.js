//map reduce filter sort forEach

const arr = [1, 2, 3, 4, 5, 3];

//map creates a new array by applying a function
//like multiply add subtract divide to the each element.
//doesnt mutate the og array
const map = arr.map((x) => x * 2);
console.log(map);


//reduce reduces the array into the single value 
//works with the accumulator
const reduce = arr.reduce((acc, num) => acc + num, 0);
console.log(reduce);


//filter creates a new array by applying the given condition 
//doesnt mutate the og array
const filter = arr.filter((x) => x % 2 === 0);
console.log(filter);

//iterates over the each element 
//doesnt returns a new array always returns undefined
//executes a callback once per element
const forEach = arr.forEach((x) => console.log(x));

//sort sorts the array
const sort = arr.sort();
console.log(sort);
