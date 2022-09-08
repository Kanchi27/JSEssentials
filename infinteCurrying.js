function sum(a) {
    return function (b) {
        if (b) return sum(a + b);
        return a;
    }
}

const sum = (a) => (b) => b ? sum(a + b) : a

console.log(sum(2)(3)(4)(5)(6)());

console.log(sum1(2)(3)(4)(5)(6)());



//  prob on currying
function sum(...a){ // when you write a rest operator : a becomes an array , so ...a => is comma separated args whereas a is array
  return function(...b){
    if(!a.length) return 0;
    if(!b.length)  {
      return a.reduce((acc,curr) => acc+curr)
    }
    else return sum(...a,...b)  //again we spread here : so array becomes:comma separated args=> 1,2,3 // 1,2,3,4
  }
}


console.log(sum(1,2)(3)(4)());
console.log(sum(12)(3)(4)());
console.log(sum(1)());
console.log(sum()());
console.log(sum(0)());
