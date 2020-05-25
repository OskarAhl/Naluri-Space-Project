// BigInt Generator for the Spigot algorithm
// https://en.wikipedia.org/wiki/Spigot_algorithm
// http://www.pi314.net/eng/goutte.php
// https://observablehq.com/@mourner/calculating-pi-digits

function* PIDigitsGenerator() {
    let q = 1n,
        r = 0n,
        t = 1n,
        k = 1n,
        n = 3n,
        l = 3n

    while (true) {
        if (q * 4n + r - t < n * t) {
            yield Number(n)
            const nr = (r - n * t) * 10n
            n = ((q * 3n + r) * 10n) / t - n * 10n
            q *= 10n
            r = nr
        } else {
            const nr = (q * 2n + r) * l
            const nn = (q * k * 7n + 2n + r * l) / (t * l)
            q *= k
            t *= l
            l += 2n
            k += 1n
            n = nn
            r = nr
        }
    }
}

const PIGenerator = PIDigitsGenerator()

exports.PIGenerator = PIGenerator
