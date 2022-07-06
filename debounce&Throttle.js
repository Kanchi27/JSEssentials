// https://www.telerik.com/blogs/debouncing-and-throttling-in-javascript
// Throttling
// is a technique in which, no matter how many times the user fires the event, the attached function will be executed only once
// in a given time interval.


// Debouncing
// no matter how many times the user fires the event, the attached function will be executed only after the specified time
// once the user stops firing the event.


// The main difference between throttling and debouncing is that throttling executes the function at a regular interval, 
// while debouncing executes the function only after some cooling period.

// Use of Debouncing and Throttling in Real Life
// We can throttle a button click event, if we do not want the user to spam by clicking the button frequently.
// In the case of window resize event, if we want to redraw the UI only when the user has fixed the size of the window, we can use debouncing.
// With Mouse move event, if we are displaying the location coordinates of the mouse pointer, it is much better to show the coordinates 
// once the user reached the desired location. Here, we can use debouncing.


const throttlePrint = (cb, d) => {
    let timer;
   
    return function (...args) {
      // If setTimeout is already scheduled, no need to do anything
        if(timer)  return;
      // Schedule a setTimeout after delay seconds
      
        timer = setTimeout(() => {
        cb(...args);
            // Once setTimeout function execution is finished, timerId = undefined so that in
		    // the next event, function execution can be scheduled by the setTimeout
        timer = undefined;
        },d)
    }
}

const debouncedPrint = (cb, d) => {
    let timer;
    return function (...args) {
        // if user is still tying clear previous timer
        if (timer) clearTimeout(timer);
        // whenever user types , reinitiate the timer
        // when user stops typing, prev timers will be cancelled, current timer will complete and cb will be executed
        timer = setTimeout(() =>  cb(...args), d)
    }
}

const debouncedPrint = (cb, delay) => {
  let timer;
  return function() {
    const context = this;
    const args = arguments;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => cb.apply(context, args), delay);
  };
};

function waitForInput(ip) {
    console.log(ip)
}


// const debouncedFn = debouncedPrint(() => waitForInput('Received Input from user'), 2000)
const debouncedFn = debouncedPrint(waitForInput, 2000)

debouncedFn('Input received in cb function , add');
