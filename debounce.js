const debouncedPrint = (cb, d) => {
    let timer;
    return function (...args) {
        // if user is still tying clear previous timer
        if (timer) clearTimeout(timer);
        // whenever user types , reinitiate the timer
        // when user stops typing, prev timers will be cancelled, current timer will complete and cb will be executed
        setTimeout(() => {
            cb(...args);
        }, d)
    }
}

function waitForInput(ip) {
    console.log(ip)
}


// const debouncedFn = debouncedPrint(() => waitForInput('Received Input from user'), 2000)
const debouncedFn = debouncedPrint(waitForInput, 2000)

debouncedFn('Input received in cb function , add');