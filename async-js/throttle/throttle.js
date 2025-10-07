//throttle ensures that the function runs at most once every X ms,
//no matter how many times the event is triggered

//runs the function at regular interval while the user keeps doing something.

//Scroll Event: update the scroll event at most every 200 ms to avoid performance issues.
//Youtube live stream slow chat mode: where the chat is sent only once after the specified amt of time has passed

const throttle = (fn, delay) => {
  let lastCall = 0;

  return (...args) => {
    const now = Date.now();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  };
};

const chatMessage = (chat) => {
  console.log("sending the chat " + chat);
};

const throttleChatMessage = throttle(chatMessage, 100);

throttleChatMessage("hii");
throttleChatMessage("hello");
throttleChatMessage("How are you");
throttleChatMessage("WYD");
throttleChatMessage("Wya");
throttleChatMessage("YAPPPPPP");

function throttlee(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  };
}

const handleEventTrigger = throttle((e) => {
  console.log("event has triggered");
}, 2000);

window.addEventListener('mousemove', handleEventTrigger);
