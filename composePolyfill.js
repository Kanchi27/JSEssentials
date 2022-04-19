

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

