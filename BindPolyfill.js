let basic = {
  'name': 'shyam',
  'age': 24
};

function callMe(city) {
  console.log('Hi! ' + this.name + ' is ' + this.age + ' and city is ' + arguments[0] + ' and state is ' + arguments[1]);
}
let callBinded = callMe.bind(basic, 'jammu');
callBinded('j&k');


Function.prototype.mybind = function (context, ...args1) {
  let fn = this;
  return function (...arg2) {
      return fn.apply(context, [...args1, ...arg2])
  }
};

const bound = callMe.mybind(basic, 'jammu')
bound('j&k');
