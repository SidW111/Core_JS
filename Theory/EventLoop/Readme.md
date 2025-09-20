# Event loop Order (Browser)

### 1 Call stack -> executes one function at a time (LIFO)

### 2 Web APIs -> handle async tasks (setTimeout, fetch, DOM events)

### 3 Microtasks queue -> promises, mutationobserver, queueMicrotask

    always drained fully before the next step

### 4 Render step(UI update) -> browser paints if microtask queue is empty

### 5 Macrotask queue (callback queue) -> setTimeout, setInterval, I/O

### Loop repeats 🔄
