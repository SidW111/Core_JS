function Outer() {
  const name = "Sid";
  function Inner() {
    console.log(name);
  }
  return Inner;
}

const Name = Outer();
mainName();
