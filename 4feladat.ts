function osszesOszto(szam: number): number[] {
    const osztok: number[] = [];

    for (let i = 1; i <= Math.sqrt(szam); i++) {
        if (szam % i === 0) {
            osztok.push(i);
            if (i !== szam / i) {
                osztok.push(szam / i);
            }
        }
    }

    return osztok.sort((a, b) => a - b);
}

console.log(osszesOszto());

function parosDarab(szamok: number[]): number {
    return szamok.filter(szam => szam % 2 === 0).length;
}
console.log(parosDarab([]));

function fuggvenyhivasPalindrom(callback: () => string): boolean {
  
    const szoveg: string = callback();
    const tisztitottSzoveg = szoveg.replace(/\s/g, "").toLowerCase();

    const forditottSzoveg = tisztitottSzoveg.split("").reverse().join("");
    return tisztitottSzoveg === forditottSzoveg;
}
const peldaFuggveny = () => "indul a görög aludni";

console.log(fuggvenyhivasPalindrom(peldaFuggveny));