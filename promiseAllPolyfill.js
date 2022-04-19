// implement promise.all polyfill




function showLogAfterDelay(text, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text)
        }, delay)
    });
}

function customPromiseAll(promises) {
    let promiseResult = [];
    return new Promise((resolve, reject) => {
        promises.forEach((p, index) => {
            p.then((val) => {
                promiseResult.push(val);
                if (index === promises.length - 1) {
                    resolve(promiseResult);
                }
            }).catch((val) => reject(val))
        })
    })
}

customPromiseAll([showLogAfterDelay('Output after 2 seconds', 2000), Promise.resolve('Resolve me')])
    .then((val) => console.log('in resolve', val))
    .catch((val) => console.log('in reject', val));
customPromiseAll([showLogAfterDelay('Output after 2 seconds', 2000), Promise.resolve('Resolve me'), Promise.reject('Reject me')])
    .then((val) => console.log('in resolve', val))
    .catch((val) => console.log('in reject', val));