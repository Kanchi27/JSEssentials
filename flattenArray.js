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



// Flatten an array of different data types
// Input:
const array = [
  'item',
  {
    "somekey" : "values",
    "obj" : {
      'prop1' : 'value1',
      'prop2' : 'value2'
    }
  },
    [1, 2, 3, 4],
    undefined,
    null,
    ["a","b","c"],
    [["p"],["q"],["r"]]
]

// Output:
// [
//   'item',   'values', 'value1',
//   'value2', 1,        2,
//   3,        4,        undefined,
//   null,     'a',      'b',
//   'c',      'p',      'q',
//   'r'
// ]

function flattenObj(obj){
  const res = [];
  Object.keys(obj).forEach(key => {
    if(typeof obj[key]==='string'){
      res.push(obj[key])
    }else{
      res.push(...flattenObj(obj[key]))
    }
  })
  return res;
}

function flattenArray(arr){
  const result = [];
  for(let a of arr){
    if(a && a.constructor === Object){
     result.push(...flattenObj(a))
    }else if(Array.isArray(a)){
      result.push(...flattenArray(a))
    }else{
      result.push(a)
    }
  }
  return result;
}
console.log(flattenArray(array))
