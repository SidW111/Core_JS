//Spread Operator is used to expand an iterable elements
//(like an array or a string) into its individual elements.

//deep copy
// const oldNumber = [1, 2, 3];
// //deep copy
// const newNumber = [...oldNumber];
// oldNumber.push(4);
// console.log(newNumber);

/*
//merge two arrays
*/

// const order = {
//     id:1,
//     prodName:'Cube',
//     customerName:'Sid',
// }

// const newOrder ={
//     ...order
// }

// console.log(newOrder)

/*
//Compose
*/

// const num1 = [1,2,3]
// const num2 = [4,5,6]

// console.log(100,...num1,...num2,200)

//shallow copy of the object

// const order = {
//   id: 1,
//   prodName: "Cube",
//   customerName: "Sid",
//   items: [1, 2, 3],
// };
// const newOrder = {
//   ...order,
// };
// order.items.push(4);
// console.log(newOrder);

/*
merge two objects
*/

// const user = {
//   id: 1,
//   name: "sid",
// };

// const address = {
//   street: "main street",
// };

// const userName = {
//   ...user,
//   ...address,
// };

// console.log(userName);
