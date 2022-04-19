function myMemoize(fn, context, args) {
    const res = {}
    return function (...args) {
        var argsCache = JSON.stringify(args);
        if (!res[argsCache]) {
            res[argsCache] = fn.call(context || this, ...args)
        }
        return res[argsCache]
    };
}

const compute = (num1, num2) => {
    for (let i = 0; i < 100000000; i++) {

    }
    return num1 * num2
}

const memoizedHeavyCompute = myMemoize(compute)

console.time('1')
console.log(memoizedHeavyCompute(1322, 5435))
console.timeEnd('1')


console.time('2')
console.log(memoizedHeavyCompute(1322, 5435))
console.timeEnd('2')