async function events() 
{
  console.log("start");

  setTimeout(() => {
    console.log("setTimeOut");
  }, 0);

  Promise.resolve().then(() => {
    console.log("promise");
  });

  console.log("end");
}
// events()

//start sync,call stack
//end sync,call stack
//promise microtask
//setTimeOut macrotask

function asyawait(){async function sid() {
  console.log("a");
  await Promise.resolve();
  console.log("b");
}

sid();
console.log("c");}

// asyawait()