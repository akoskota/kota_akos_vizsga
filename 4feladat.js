function osszesOszto(szam) {
    var osztok = [];
    for (var i = 1; i <= Math.sqrt(szam); i++) {
        if (szam % i === 0) {
            osztok.push(i);
            if (i !== szam / i) {
                osztok.push(szam / i);
            }
        }
    }
    return osztok.sort(function (a, b) { return a - b; });
}
console.log(osszesOszto());
function parosDarab(szamok) {
    return szamok.filter(function (szam) { return szam % 2 === 0; }).length;
}
console.log(parosDarab([]));
function fuggvenyhivasPalindrom(callback) {
    var szoveg = callback();
    var tisztitottSzoveg = szoveg.replace(/\s/g, "").toLowerCase();
    var forditottSzoveg = tisztitottSzoveg.split("").reverse().join("");
    return tisztitottSzoveg === forditottSzoveg;
}
var peldaFuggveny = function () { return "indul a görög aludni"; };
console.log(fuggvenyhivasPalindrom(peldaFuggveny));
