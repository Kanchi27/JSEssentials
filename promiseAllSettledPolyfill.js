// implement promise.allSettled polyfill

function showLogAfterDelay(text, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text)
        }, delay)
    });
}

function customPromiseAllSettled(promises) {
    let promiseResult = [];
    return new Promise((resolve, reject) => {
        promises.forEach((p) => {
            p.then((val) => {
                promiseResult.push({ status: 'fulfilled', value: val });
                if (promiseResult.length === promises.length) resolve(promiseResult);


            }).catch((val) => {
                promiseResult.push({ status: 'rejected', value: val });
                if (promiseResult.length === promises.length) resolve(promiseResult);
            })

        })
    })
}

Promise.allSettled([showLogAfterDelay('Output after 2 seconds', 2000), Promise.resolve('Resolve me'), Promise.reject('Reject me')])
    .then((val) => console.log('in resolve', val))
    .catch((val) => console.log('in reject', val))
// customPromiseAllSettled([showLogAfterDelay('Output after 2 seconds', 2000), Promise.resolve('Resolve me')])
//     .then((val) => console.log('in customPromiseAllSettled resolve', val))
//     .catch((val) => console.log('in  customPromiseAllSettled reject', val));
customPromiseAllSettled([showLogAfterDelay('Output after 2 seconds', 2000), Promise.resolve('Resolve me'), Promise.reject('Reject me')])
    .then((val) => console.log('in customPromiseAllSettle resolve', val))
    .catch((val) => console.log('in customPromiseAllSettle reject', val));


// Output :
// in resolve [
//   { status: 'fulfilled', value: 'Resolve me' },
//   { status: 'rejected', value: 'Reject me' },
//   { status: 'fulfilled', value: 'Output after 2 seconds' }
// ]
