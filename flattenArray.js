let arr = [
    [1, 2],
    [3, 4],
    [5, 6, [7, ['a', 'b', 'c'], 8], 9],
    [10, 11, 12],
]

console.log('using concat', [].concat(...arr));

console.log('using inbuilt flatten method', arr.flat(2))

const customFlatten = (array) => {
    let result = [];
    array.forEach(arr => {
        if (Array.isArray(arr)) {
            result.push(...customFlatten(arr));
        } else {
            result.push(arr)
        }
    });
    return result;
}

console.log('using custom method', customFlatten(arr))
