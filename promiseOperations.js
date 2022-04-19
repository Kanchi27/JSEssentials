const showLogAfterDelay = (text, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text)
        }, delay)
    });
}


Promise.all([showLogAfterDelay('Output after 2 seconds', 2000), Promise.resolve('Resolve me')])
    .then((val) => console.log('in Promise.all resolve', val));

// Output : returns after 2 seconds
// in resolve (2) ['Output after 2 seconds', 'Resolve me']


Promise.all([showLogAfterDelay('Output after 2 seconds', 2000), Promise.resolve('Resolve me'), Promise.reject('Reject me')])
    .then((val) => console.log('in Promise.all  in resolve', val))
    .catch((val) => console.log('in Promise.all  in reject', val))

// Output: (return immediately)
// in reject Reject me

Promise.allSettled([showLogAfterDelay('Output after 2 seconds', 2000), Promise.resolve('Resolve me')])
    .then((val) => console.log('in Promise.allSettled  in resolve', val));

// Output after 2 seconds:
//[
//     {
//         "status": "fulfilled",
//         "value": "Output after 2 seconds"
//     },
//     {
//         "status": "fulfilled",
//         "value": "Resolve me"
//     }
// ]

Promise.allSettled([showLogAfterDelay('Output after 2 seconds', 2000), Promise.resolve('Resolve me'), Promise.reject('Reject me')])
    .then((val) => console.log('in Promise.all  in resolve', val))
    .catch((val) => console.log('in Promise.all  in reject', val))

// Output after 2 seconds:
// [
//     {
//         "status": "fulfilled",
//         "value": "Output after 2 seconds"
//     },
//     {
//         "status": "fulfilled",
//         "value": "Resolve me"
//     },
//     {
//         "status": "rejected",
//         "reason": "Reject me"
//     }
// ]


Promise.any([showLogAfterDelay('Output after 2 seconds', 2000), Promise.reject('Reject me')])
    .then((val) => console.log('in Promise.any  in resolve', val));

// Output : after 2 seconds resolves resolved promise
// in Promise.any  in resolve Output after 2 seconds


Promise.any([Promise.reject('Reject me M one '), Promise.reject('Reject  me M two')])
    .then((val) => console.log('in Promise.any  in resolve', val))
    .catch((val) => console.log('in Promise.any  in reject', val));


// Output immediately: 
// in Promise.any  in reject AggregateError: All promises were rejected

Promise.any([showLogAfterDelay('Output after 2 seconds', 2000), Promise.resolve('Resolve me'), Promise.reject('Reject me')])
    .then((val) => console.log('in Promise.any  in resolve', val))
    .catch((val) => console.log('in Promise.any  in reject', val))

// Output : immediately resolves resolved promise
// in Promise.any  in resolve Resolve me


Promise.race([showLogAfterDelay('Output after 2 seconds', 2000), Promise.reject('Reject me')])
    .then((val) => console.log('in Promise.race  in resolve', val))
    .catch((val) => console.log('in Promise.race  in reject', val));

// Output immediately
// in Promise.race  in reject Reject me    

Promise.race([showLogAfterDelay('Output after 2 seconds', 2000), Promise.reject('Reject me'), Promise.resolve('Resolve me')])
    .then((val) => console.log('in Promise.race  in resolve', val))
    .catch((val) => console.log('in Promise.race  in reject', val))

// Output immediately
// in Promise.race  in reject Reject me    

Promise.race([showLogAfterDelay('Output after 2 seconds', 2000), Promise.resolve('Resolve me'), Promise.reject('Reject me')])
    .then((val) => console.log('in Promise.race  in resolve', val))
    .catch((val) => console.log('in Promise.race  in reject', val))

// Output immediately
// in Promise.race  in resolve Resolve me    