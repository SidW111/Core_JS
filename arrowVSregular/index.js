//regular func have their own arguments object
//functions have this which is depended on how the func is invoked

//need to have implicit return keyword to return a value

// can be used as  a constructor to create object

//hoisted
function Sid() {
  console.log(arguments);

}
Sid(1, 2, 3);

//arrow fun dont have their own arguments instead
//it inherits the arguments object from the surronding scope

//arrow fun have this which are inherited from the parent scope

//they dont need a explicit return if the fun has single expression

//cant be used as  constructor

//not hoisted
const sd = (a,b) => {
//   console.log(arguments);
  a+b;
// console.log(a+b)
};
sd(1,2);


