// Print values 0, 1, 2 in intervals of 3 seconds
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 3000 * i)
}



// solve with let
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 3000 * i)
}


// solve with closures
for (var i = 0; i < 3; i++) {
    function inner(x) {
        setTimeout(() => {
            console.log(x)
        }, 3000 * x)
    }
    inner(i);
}