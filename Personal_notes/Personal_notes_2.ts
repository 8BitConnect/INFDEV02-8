export namespace p_notes_2 {
// Types:
    // Basic types:
    type Fun<a,b> = (_:a) => b

    // Advanced types:
    type NumTo<a> = Fun<number, a>
    type Pair<a,b> = {fst: a, snd: b}


// Functions:
    // Basic functions:
    let incr : Fun<number,number> = x => x + 1;
    let twice : Fun<number,number> = x => x * 2;
    let fst = function<a,b>() : Fun<Pair<a,b>, a> {
        return p => p.fst
    };
    let snd = function<a,b>() : Fun<Pair<a,b>, b> {
        return p => p.snd
    };

    // Advanced functions:
    let mk_pair = function<c,a,b>(p:Fun<c,a>, q:Fun<c,b>) : Fun<c,Pair<a,b>> {
        return (c:c) => ({ fst:p(c), snd:q(c) })
    };
    let then = function<a,b,c>(f:Fun<a,b>,g:Fun<b,c>):Fun<a,c> {
        return x => g(f(x))
    };

    let do_twice = (f, x) => f(f(x));
    let do_twice_2 = f => x => f(f(x));
    let compose = (f, g) => x => f(g(x));

// Example exercises in this note:
    console.log(mk_pair(incr, twice));
    console.log(then(mk_pair(incr, twice), snd()));

}