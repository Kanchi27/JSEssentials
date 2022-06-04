function sum(a) {
    return function (b) {
        if (b) return sum(a + b);
        return a;
    }
}

const sum = (a) => (b) => b ? sum(a + b) : a

console.log(sum(2)(3)(4)(5)(6)());

console.log(sum1(2)(3)(4)(5)(6)());
