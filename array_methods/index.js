let arr = [1, 2, 3];

//Adding or removing elements

//push
arr.push(4);
// adds at the end

//pop()
arr.pop();
//removes from the end

//unshift
arr.unshift(4);
// adds at the start

//shift
arr.shift(4);
//removes from the start

//transforming or iteration of arrays

//.map() returns the new array with modified values
arr.map((x) => x * 2);
// const newArr = arr.map((x) => x * 2);
// console.log(newArr)

//.forEach() for looping (doesnt return new array)
arr.forEach((x) => x);

//new arr
let arr2 = [2, 4, 7];

//filtering or finding

//.filter returns a new array that matches the conditions
arr2.filter((x) => x % 2 == 0);
// const filt = arr2.filter((x) => x % 2 == 0);
// console.log(filt)

//.find() returns the first matching element
arr2.find((x) => x > 2);
// const newA = arr2.find(x => x>2)
// console.log(newA)

//findIndex() returns the index of first match
arr2.findIndex((x) => x > 4);
// const newArr = arr2.findIndex(x=> x>4) //2
// console.log(newArr)


//checking


//.includes() check if the value exist
arr2.includes(2); //true
// console.log(arr2.includes(2))

//.some() checks if any element matches condition
arr2.some((x) => x);
// const arrw= arr2.some(x => x)
// console.log(arrw)

//.every() checks if every element matches condition
arr2.every((x) => x > 4);
// const arrr = arr2.every(x=> x>2)
// console.log(arrr)

//.reduce() reduce the array to a single value
arr2.reduce((sum, x) => sum + x, 0);
// const arrr = arr2.reduce((sum, x) => sum + x, 0);
// console.log(arrr);


let arr3 = [1,2,3,4,6,7,8,9,5]
//sorting/reversing


//.sort() sorts(mutates original)
arr3.sort()
// console.log(arr3)

//.reverse()
arr3.reverse()
// console.log(arr3)



// slicing/splicing


//.slice(start,end) extracts part (does not modify the original)
arr3.slice(0,5)
// const slicearr = arr3.slice(0,5)
// console.log(slicearr)

//.splice(start,delete,..items) add/remove elements (modifies original)
let arrr = [1,2,3,4]
arrr.splice(2,1,99)

// console.log(arrr)