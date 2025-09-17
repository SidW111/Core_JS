///closure is a feature in js.
///where an inner function retains the access to the variables and the parameters
///of its outer function (enclosing function)
///even after the function has finished the execution
///the ability of remembering its surrounding env is a key characteristics of the Closure

function Outer() {
  const name = "Sid";
  function Inner() {
    console.log(name);
  }
  return Inner;
}

const Name = Outer();
