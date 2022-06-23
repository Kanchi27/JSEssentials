

function subtractTwo(a) {
    return a - 2;
}

function addFive(a) {
    return a + 5;
}

function multiplyFour(a) {
    return a * 4;
}

const composePolyfill = (...fns) => {
    return function (arg) {
        return fns.reduceRight((currVal, fn) => fn(currVal), arg)
    }
}
//console.log('with compose', compose(addFive, subtractTwo, multiplyFour)(5))

const evaluate = composePolyfill(addFive, subtractTwo, multiplyFour);
console.log(evaluate(5))


// Pipe polyfill -- goes from left to right in sequence of functions listed (0 to n-1)
pipe = (...fns) => x => fns.reduce((v, f) => f(v), x)

// Compose Polyfill --  goes from right to left in sequence of functions listed (n-1 to 0)
compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
