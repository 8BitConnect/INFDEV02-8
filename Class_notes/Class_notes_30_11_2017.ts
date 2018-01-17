export namespace notes_two{
    type Pair<a,b> = { fst:a, snd:b }
    type Fun<a,b> = (_:a) => b

    let fst = function<a,b>() : Fun<Pair<a,b>, a> {
        return p => p.fst
    };

    let snd = function<a,b>() : Fun<Pair<a,b>, b> {
        return p => p.snd
    };

    let mk_pair = function<c,a,b>(p:Fun<c,a>, q:Fun<c,b>) : Fun<c,Pair<a,b>> {
        return (c:c) => ({ fst:p(c), snd:q(c) })
    };

    let then = function<a,b,c>(f:Fun<a,b>,g:Fun<b,c>):Fun<a,c> {
        return x => g(f(x))
    };

    // NumTo is a function from a type (a) to another type
    type NumTo<a> = Fun<number,a>

    let f : NumTo<boolean>
        = x => x % 2 == 0;

    let g : NumTo<number>
        = x => x * 2;



    // function<b,c>(Fun<number,Pair<boolean,number>>:Fun<,Pair<boolean,number>>,
    //               Fun<Pair<boolean,number>, boolean>:Fun<b,c>):Fun<number,boolean>

    let my_pair = then(mk_pair(f, g), fst());

    let incr : Fun<number,number> = x => x + 1;
    let twice : Fun<number,number> = x => x * 2;
    let my_f : Fun<number,number> = then(incr, incr);
    let my_g : Fun<number,Pair<number,number>> = mk_pair(incr, twice);

    // mk_pair(incr, twice)
    // mk_pair(Fun<number,number>, twice)
    // mk_pair(Fun<number,number>, Fun<number,number>)
    // (function<c,a,b>(p:Fun<c,a>, q:Fun<c,b>) : Fun<c,Pair<a,b>>)(Fun<number,number>, Fun<number,number>)
    // (function<c,a,b>(Fun<number,number>:Fun<c,a>, q:Fun<c,b>) : Fun<c,Pair<a,b>>)(, Fun<number,number>)
    // (function<b>(Fun<number,number>, q:Fun<number,b>) : Fun<number,Pair<number,b>>)(, Fun<number,number>)
    // (function<b>(, Fun<number,number>:Fun<number,b>) : Fun<number,Pair<number,b>>)
    // (function<>(, Fun<number,number>) : Fun<number,Pair<number,number>>)
    // (function<>(, ) : Fun<number,Pair<number,number>>)
    // Fun<number,Pair<number,number>>

    let my_h = then(my_g, snd());
    // (function<a,b,c>(f:Fun<a,b>,g:Fun<b,c>):Fun<a,c>)(Fun<number,Pair<number,number>>, function<a,b>() : Fun<Pair<a,b>, b>)
    // (function<a,b,c>(Fun<number,Pair<number,number>>:Fun<a,b>,g:Fun<b,c>):Fun<a,c>)(, function<a,b>() : Fun<Pair<a,b>, b>)
    // (function<c>(Fun<number,Pair<number,number>>:Fun<a,b>,g:Fun<Pair<number,number>,c>):Fun<number,c>)(, function<a,b>() : Fun<Pair<a,b>, b>)
    // (function<c>(,g:Fun<Pair<number,number>,c>):Fun<number,c>)(, function<a,b>() : Fun<Pair<a,b>, b>)
    // (function<c>(,function<a,b>() : Fun<Pair<a,b>, b>:Fun<Pair<number,number>,c>):Fun<number,c>)
    // (function<c>(,Fun<Pair<number,number>, number>:Fun<Pair<number,number>,c>):Fun<number,c>)
    // Fun<number,number>



    let mystery = my_h(10);

    // my_h(10)
    // Fun<number,number>(10)
    // Fun<number,number>(number)
    // number

    let h : NumTo<string>
        = x => `The number is: ${x}`;

    let p : Pair<number,boolean> = { fst:10, snd:false };
    let q : Pair<number,Fun<number,boolean>> = { fst:10, snd:f };
    // let q : { fst:number, snd:(_:number) => boolean } = { fst:10, snd:f }

}