const memoize = (fn,context) => {
  let cache = {}
  return (...args) => {
    const key = JSON.stringify(args) // (rest param) args is an array, as passed argument is 1,2,3 : memoizedAdd(1,2,3)
    if(key in cache){
      console.log('from cache')
    }else{
      console.log('computing result')
      cache[key] = fn.apply(context,args)
//       OR , fn.call(context || this, ...args)
    }
    return cache[key]
  }
}

**************************** Normal Addition fuction **********************************

const add = (a,b,c) => a+b+c

const memoizedAdd = memoize(add)
console.log(memoizedAdd(1,2,3)).  //computing result // 6

console.log(memoizedAdd(1,2,3))   // from cache // 6

// Inline
const addThree = memoize((a,b,c) => a+b+c)

console.log(addThree(1,2,3))  //computing result // 6
console.log(addThree(1,2,3))  // from cache // 6


**************************** Recursive fuction **********************************
  
const memoizedFactorial = memoize(fact)
const fact = (x) => {
  if(x===0) return 1;
  else return x*factorial(x-1);
}
console.log(memoizedFactorial(5))
// computing result (5)
// computing result (4)
// computing result (3)
// computing result (2)
// computing result (1)
// computing result (0)
// 120
console.log(memoizedFactorial(6))
// computing result [ 6 ]
// computing result [ 5 ]
// from cache
// 720

// Inline
const factorial = memoize((x) => {
  if(x===0) return 1;
  else return x*factorial(x-1);
})
console.log(factorial(5))   
// computing result (5)
// computing result (4)
// computing result (3)
// computing result (2)
// computing result (1)
// computing result (0)
// 120
console.log(factorial(6))
// computing result [ 6 ]
// computing result [ 5 ]
// from cache
// 720
