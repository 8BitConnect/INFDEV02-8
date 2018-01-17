export module exam {
    // Part I:
    type Fun<a, b> = {
        f: (_: a) => b,
        then: <c>(g: Fun<b, c>) => Fun<a, c>
    }

    let Fun = function <a, b>(f: ((_: a) => b)): Fun<a, b> {
        return {
            f: f,
            then: function <c>(this: Fun<a, b>, g: Fun<b, c>): Fun<a, c> {
                return Fun<a, c>(x => g.f(this.f(x)))
            }
        }
    };

    // Part II:
    let incr: Fun<number, number> = Fun((x: number) => x + 1);
    let is_positive: Fun<number, boolean> = Fun((x: number) => { return x >= 0 });

    // Part III:
    type Sum<a, b> = { kind: 'l', value: a } | { kind: 'r', value: b }

    let inl = function <a,b>() : Fun<a, Sum<a,b>> {
        return Fun<a, Sum<a,b>>(v => ({ kind:"l", value:v }))
    };
    let inr = function <a,b>() : Fun<b, Sum<a,b>> {
        return Fun<b, Sum<a,b>>(v => ({ kind:"r", value:v }))
    };

    let plus = function <a, b, c>(f: Fun<a, c>, g: Fun<b, c>): Fun<Sum<a, b>, c> {
        return Fun<Sum<a,b>, c>(v => v.kind == 'l' ? f.f(v.value) : g.f(v.value));
    };

    let map_plus = function <a, b, c, d>(f: Fun<a, c>, g: Fun<b, d>): Fun<Sum<a, b>, Sum<c, d>> {
        return Fun<Sum<a,b>, Sum<c,d>>(s => s.kind == 'l' ?
            f.then(inl<c, d>()).f(s.value) :
            g.then(inr<c, d>()).f(s.value)
        )
    };
}