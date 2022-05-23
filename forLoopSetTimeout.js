// Print values 0, 1, 2 in intervals of 3 seconds
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 3000 * i)
}




// solved with var, using third param of setTimeout
for (var i = 0; i <= 3; i++) {
  // We can use 3rd parameter of setTimeout to pass the value of iteration which creates a new scope each time loop iterates
  setTimeout(console.log, (i) * 3000, i);
}

// solve with let
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 3000 * i)
}


// solve with closures:
// Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.
for (var i = 0; i < 3; i++) {
    function inner(x) {
        setTimeout(() => {
            console.log(x)
        }, 3000 * x)
    }
    inner(i);
}
