///lexical scope in js is also known as a static scope determines the
///accessibility of variables and functions based on their physical placement
///within the source code at the time of definition

///Inner functions have access to variables and functions defined in their parent (outer) scopes.
///Outer scopes cannot access variables or functions defined within their inner (child) scopes. 

///The scope chain moves upwards, not downwards.

///Lexical scope is determined when the code is written (at compile time), not during runtime execution.
///This contrasts with dynamic scope, which would depend on the runtime call stack.

function Outer() {
  const name = "sid";
  function Inner() {
    console.log(name);
  }
  Inner();
}

const name = Outer();
console.log(name);
