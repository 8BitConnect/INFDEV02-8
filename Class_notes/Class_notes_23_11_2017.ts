export module class_notes1 {
    // PURE FUNCTION: output is only dependent on input

    // let incr = function(x) { return x + 1 }
        let incr = x => x + 1;
        let double = x => x * 2;

        let do_twice = (f, x) => f(f(x));
    // SPECIAL: f (a parameter) is a function!,
    // do_twice is a higher-order-function (HOF)

        let do_twice_2 = f => (x => f(f(x)));
    // SPECIAL: do_twice_2 is also a HOF,
    // but it also returns a function

        let compose = (f, g) => x => f(g(x));
        console.log(compose(incr, double));

    // console.log(((f,g) => x => f(g(x)))(incr, double))
    // console.log((x => incr(double(x))))
    // console.log((x => incr((x => x * 2)(x))))
    // console.log((x => incr(x * 2)))
    // console.log((x => (x => x + 1)(x * 2)))
        console.log((x => ((x * 2) + 1)));

        console.log(compose(incr, double)(3));
        console.log((x => ((x * 2) + 1))(3));
        console.log(((3 * 2) + 1));

        console.log(compose(incr, compose(incr, double))(3));
        console.log(compose(incr, (x => ((x * 2) + 1)))(3));
        console.log(((x => ((x * 2) + 1) + 1))(3));

        console.log(compose(compose(incr, incr), double)(3));
        console.log((x => ((x * 2) + 1) + 1)(3));


        let then = f => g => x => g(f(x));
        console.log(then(incr));
        console.log((f => g => x => g(f(x)))(incr));
        console.log((g => x => g(incr(x))));

        console.log(then(incr)(double));
        console.log(then(incr)(double)(3));
        console.log(then(incr)(then(incr)(double))(3));


    // PART IIB
    // console.log(do_twice_2(incr)(3))
    // console.log(((x => ((x + 1) + 1)))(3))
    // console.log((3 + 1) + 1)

    // console.log(do_twice_2(incr))
    // console.log((f => (x => f(f(x))))(incr))
    // console.log(((x => incr(incr(x)))))
    // console.log(((x => incr((x => x + 1)(x)))))
    // console.log(((x => (x => x + 1)((x => x + 1)(x)))))
    // console.log(((x => ((x + 1) + 1))))

    // console.log(do_twice_2(double))
    // console.log((f => (x => f(f(x))))(double))
    // console.log(((x => double(double(x)))))
    // console.log(((x => double((x => x * 2)(x)))))
    // console.log((x => (((x * 2) * 2))))

    // PART IIA
    // console.log(do_twice(incr, 10))
    // console.log(((f,x) => f(f(x)))(incr, 10))
    // console.log(incr(incr(10)))
    // console.log(incr((x => x + 1)(10)))
    // console.log(incr(11))
    // console.log((x => x + 1)(11))
    // console.log(12)


    // PART I:
    // PRINCIPLE OF SUBSTITUTION: function call allows us to substitute
    // the parameter for the argument
    // console.log(double(incr(10)))
    // console.log(double((x => x + 1)(10)))
    // console.log(double(10 + 1))
    // console.log(double(11))
    // console.log((x => x * 2)(11))
    // console.log(11 * 2)
    // console.log(22)

    // console.log((x => x * 2)((x => x + 1)(10)))
    // console.log((((x => x + 1)(10)) * 2))
    // console.log(((11) * 2))
    // console.log(22)

    // console.log(incr(10))
    // console.log((x => x + 1)(10))
    // console.log(10 + 1)
    // console.log(11)

}