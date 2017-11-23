// MOAN: Mother Of All Notes

// Functions:
    // Basic functions:
let incr = x => x + 1;
let double = x => x * 2;

    // Advanced functions:
let do_twice = (f,x) => f(f(x));
let do_twice_2 = f => x => f(f(x));
let compose = (f,g) => x => f(g(x));
let then = f => g => x => f(g(x));

// Example exercises:
    // Example exercises lecture one:
console.log(incr(10));
console.log(double(incr(10)));
console.log(do_twice(incr, 10));
console.log(do_twice_2(incr));
console.log(do_twice_2(double));
console.log(do_twice_2(incr)(3));
console.log(compose(incr, double));
console.log(compose(incr, compose(incr, double))(3));
console.log(compose(compose(incr, incr), double)(3));