"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var notes_one;
(function (notes_one) {
    // Functions:
    // Basic functions:
    var incr = function (x) { return x + 1; };
    var double = function (x) { return x * 2; };
    // Advanced functions:
    var do_twice = function (f, x) { return f(f(x)); };
    var do_twice_2 = function (f) { return function (x) { return f(f(x)); }; };
    var compose = function (f, g) { return function (x) { return f(g(x)); }; };
    var then = function (f) { return function (g) { return function (x) { return f(g(x)); }; }; };
    // Example exercises in this note:
    console.log(incr(10));
    console.log(double(incr(10)));
    console.log(do_twice(incr, 10));
    console.log(do_twice_2(incr));
    console.log(do_twice_2(double));
    console.log(do_twice_2(incr)(3));
    console.log(compose(incr, double));
    console.log(compose(incr, compose(incr, double))(3));
    console.log(compose(compose(incr, incr), double)(3));
    // Example exercises answers:
    console.log(incr(10));
    // incr(10)
    // (x => x + 1)(10)
    // (10 + 1)
    // (11)
    console.log(double(incr(10)));
    // double(incr(10))
    // double((x => x + 1)(10))
    // double((10 + 1))
    // double(11)
    // (x => x * 2)(11)
    // (11 * 2)
    // (22)
    console.log(do_twice(incr, 10));
    // do_twice(incr, 10)
    // ((f,x) => f(f(x)))(incr, 10)
    // (incr(incr(10)))
    // (incr((x => x + 1)(10)))
    // (incr(10 + 1))
    // ((x => x + 1)(10 + 1))
    // ((10 + 1) + 1)
    // (12)
    console.log(do_twice_2(incr));
    // do_twice_2(incr)
    // (f => x => f(f(x)))(incr)
    // (x => incr(incr(x)))
    console.log(do_twice_2(double));
    // do_twice_2(double)
    // (f => x => f(f(x)))(double)
    // (x => double(double(x)))
    console.log(do_twice_2(incr)(3));
    // do_twice_2(incr)(3)
    // (f => x => f(f(x)))(incr)(3)
    // (x => incr(incr(x)))(3)
    // (incr(incr(3)))
    // (incr((x => x + 1)(3)))
    // (incr((3 + 1)))
    // ((x => x + 1)(3 + 1))
    // ((3 + 1) + 1)
    // (5)
    console.log(compose(incr, double));
    // compose(incr, double)
    // ((f,g) => x => f(g(x)))(incr, double)
    // (x => incr(double(x)))
    // (x => incr((x => x * 2)(x)))
    // (x => incr(x * 2))
    // (x => (x => x + 1)(x * 2))
    // (x => ((x * 2) + 1))
    console.log(compose(incr, compose(incr, double))(3));
    // compose(incr, compose(incr, double))(3)
    // compose(incr, ((f,g) => x => f(g(x)))(incr, double))(3)
    // compose(incr, (x => incr(double(x))))(3)
    // compose(incr, (x => (x => x +1)((x => x * 2)(x))))(3)
    // compose(incr, (x => (x => x +1))(x * 2))(3)
    // compose(incr, (x => ((x * 2) + 1)))(3)
    // ((f,g) => x => f(g(x)))(incr, (x => ((x * 2) + 1)))(3)
    // ((x => incr((x * 2) + 1))(3)
    // ((x => (x => x + 1)(((x * 2) + 1))(3)
    // (x => ((x * 2) + 1) + 1)(3)
    // (((3 * 2) + 1) + 1)
    // (8)
    console.log(compose(compose(incr, incr), double)(3));
    // compose(compose(incr, incr), double)(3)
    // compose(((f,g) => x => f(g(x)))(incr, incr), double)(3)
    // compose((x => incr(incr(x))), double)(3)
    // compose((x => incr((x => x + 1)(x))), double)(3)
    // compose((x => incr((x + 1))), double)(3)
    // compose((x => (x => x + 1)(x + 1)), double)(3)
    // compose((x => ((x + 1) + 1)), double)(3)
    // ((f,g) => x => f(g(x)))((x => ((x + 1) + 1)), double)(3)
    // ((f,g) => x => f(g(x)))((x => ((x + 1) + 1)), (x => x * 2))(3)
    // (x => (x => ((x + 1) + 1)(((x => x * 2))(x)))(3)
    // (x => (x => ((x + 1) + 1)((x * 2))))(3)
    // (x => (((x * 2) + 1) + 1))(3)
    // ((((3 * 2) + 1) + 1))
    // (8)
})(notes_one = exports.notes_one || (exports.notes_one = {}));
