export namespace Exam_questions {
    // Theory exam Thu 7 Dec & Thu 14 Dec.

    // Substitution
        // Functions:
    let nothing = x => x;

    let plus_one = x => x + 1;

    let after = (f, g) => x => f(g(x));

    let repeat = (f,n) => {
        if (n <= 0) {
            return nothing;
        } else {
            return after(f, repeat(f, n-1))
        }
    };

    // Question 1:
    console.log(repeat(plus_one, 2));
    // ((f,n) => after(f, repeat(f, n-1)))(plus_one, 2)
    // (((,) => after(plus_one, repeat(plus_one, 2-1)))(,))
    // (after(plus_one, repeat(plus_one, 1)))
    // (after(plus_one, (after(f, repeat(f, n-1)))(plus_one, 1)))
    // (after(plus_one, (after(plus_one, repeat(plus_one, 1-1)))))
    // (after(plus_one, (after(plus_one, nothing))))
    // Isolate: (after(plus_one, nothing))
    // ((f, g) => x => f(g(x)))(plus_one, nothing)
    // ((f, g) => x => f(g(x)))(plus_one, nothing)
    // (x => plus_one(nothing(x)))
    // (x => plus_one((x => x)(x)))
    // (x => plus_one(x))
    // (x => (x => x + 1)(x))
    // (x => x + 1)
    // (after(plus_one, (x => x + 1)))
    // (((f, g) => x => f(g(x)))(plus_one, (x => x + 1)))
    // ((x => plus_one((x => x + 1)(x))))
    // ((x => plus_one(x + 1)))
    // ((x => (x => x + 1)(x + 1)))
    // (x => (x + 1) + 1)

    // Type declarations
        // Functions:
    type Fun<a,b> = (_:a) => b

    let is_even : Fun<number, boolean> = x => x % 2 == 0;

    let incr : Fun<number, number> = x => x + 1;

    let then = function<a,b,c>(f:Fun<a,b>, g:Fun<b,c>) : Fun<a,c> {
        return x => g(f(x))
    };

    // Question 2:
    console.log(then(incr, then(incr, is_even)));
    // Isolate : then(incr, is_even)
    // (function<a,b,c>(f:Fun<a,b>, g:Fun<b,c>) : Fun<a,c>)(Fun<number,number>, Fun<number, boolean>)
    // ((Fun<number,number>:Fun<a,b>, g:Fun<b,c>) : Fun<a,c>)(Fun<number,number>, Fun<number, boolean>)
    // ((Fun<number,number>:Fun<number,number>, g:Fun<number,c>) : Fun<number,c>)(, Fun<number, boolean>)
    // ((Fun<number,number>:Fun<number,number>, Fun<number, boolean>:Fun<number,c>) : Fun<number,c>)(,)
    // ((Fun<number,number>:Fun<number,number>, Fun<number, boolean>:Fun<number,boolean>) : Fun<number,boolean>)(,)
    // (Fun<number,number>, Fun<number,boolean>) : Fun<number,boolean>
    // then(incr, Fun<number, boolean>)
    // (function<a,b,c>(f:Fun<a,b>, g:Fun<b,c>) : Fun<a,c>)(Fun<number,number>, Fun<number, boolean>)
    // ((Fun<number,number>:Fun<a,b>, g:Fun<b,c>) : Fun<a,c>)(Fun<number,number>, Fun<number, boolean>)
    // ((Fun<number,number>:Fun<number,number>, g:Fun<number,c>) : Fun<number,c>)(, Fun<number, boolean>)
    // ((Fun<number,number>:Fun<number,number>, Fun<number, boolean>:Fun<number,c>) : Fun<number,c>)(,)
    // ((Fun<number,number>:Fun<number,number>, Fun<number, boolean>:Fun<number,boolean>) : Fun<number,boolean>)(,)
    // (Fun<number,number>, Fun<number,boolean>) : Fun<number,boolean>
    // then(incr, then(incr, is_even)) : Fun<number,boolean>
}