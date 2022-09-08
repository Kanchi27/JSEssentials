
// what are the input arguments that foo funciton is called with , 
// Return in order of foo's execution

function foo(x){
  console.log(x) 
  // 0, undefined, 1, undefined, 2, 2, 3, 0
  
}

const arr = new Array(1); // [<1* empty items>]
arr.length  = 2; // [<2* empty items>]
arr.push(2); // [ <2 empty items>, 2 ]
arr.push(0);  // [ <2 empty items>, 2, 0 ]
console.log(arr)
for(const num in arr){
  console.log('num',num) 
  foo(num);             // 0,1,2,3 
  foo(arr[num]);    // undefined, undefined, 2, 0
}
