//Event loop Order (Browser)

//1 call stack -> executes one function at a time (LIFO)
//2 web APIs -> handle async tasks (setTimeout, fetch, DOM events)
//3 microtasks queue -> promises, mutationobserver, queueMicrotask
//4 render step(UI update) -> browser paints if microtask queue is empty