//Event Loop

//JS is a single threaded(it can execute only one task at a time).

//to handle asynchronous tasks(like API calls, timer, event listeners), JS uses the event loops

//The event loop constantly checks call stack and callback Queue/ microtask Queue
//to decide what to run next

//Main Components

//1 Call Stack(Execution Stack)

//where functions are executed one at a time (LIFO)
//e.g. function greet(){
//          console.log("hello")
//     }
//     greet()  //added to stack ->  executed -> removed

//2 Web API (Browsers APIS/Node APIs)

//provided by the browser (not part of JS itself)
//e.g. setTimeOut, fetch, DOM events
//They handle ASYNC tasks and push callbacks to the queue when done.

//3 callback Queue (MacroTask Queue)

//Stores tasks like setTimeout, setInterval, DOM events.
//These wait until the task is empty.

//4 Microtask Queue (Job queue / Promise Queue)

//stores tasks like Promises and MutationObserver.
//Higher priority task than callback Queue -> Always Executed first after stack clears.

//5 Event Loop

//The manager that checks
//Is the callstack empty?
//If yes -> push tasks from microtask queue first, then callback/Macrotask queue

//Simple Visualization

//1st callstack -> Executes the function

//2nd Web API -> Handles Async Works

//3rd Queue -> Sends tasks back when callstack is empty
// MicroTask / callback queue (setTimeout,setInterval)
// MacroTask (promises, mutationObserver)

//4th Event Loop -> keeps checking the cycle
