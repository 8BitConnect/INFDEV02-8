// MOAN: Mother Of All Notes
// Functions:
// Basic functions:
var incr = function (x) { return x + 1; };
var double = function (x) { return x * 2; };
// Advanced functions:
var do_twice = function (f, x) { return f(f(x)); };
var do_twice_2 = function (f) { return function (x) { return f(f(x)); }; };
var compose = function (f, g) { return function (x) { return f(g(x)); }; };
var then = function (f) { return function (g) { return function (x) { return f(g(x)); }; }; };
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
